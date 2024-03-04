// Importujemy potrzebne moduły i modele
import config from "../../config/auth.config.js";
import db from "../../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Definiujemy modele, które będziemy używać
const User = db.User;
const Role = db.Role;
const RefreshToken = db.refreshToken;

// Funkcja do logowania użytkownika
export const signin = async (req, res, next) => {
  try {
    // Szukamy użytkownika o danym username
    const user = await User.findOne({
      email: req.body.email,
    })
    // Jeśli nie znaleziono użytkownika, zwracamy błąd
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    // Sprawdzamy, czy hasło jest poprawne
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // Jeśli hasło jest niepoprawne, zwracamy błąd
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    // Generujemy token JWT
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    // Tworzymy token odświeżania
    let refreshToken = await RefreshToken.createToken(user);

    // Pobieramy role użytkownika
    const roles = await Role.find({ _id: { $in: user.roles } });

    // Przygotowujemy role użytkownika do odpowiedzi
    let authorities = [];
    for (let i = 0; i < roles.length; i++) {
      authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }

    // Wysyłamy odpowiedź z danymi użytkownika, tokenem i tokenem odświeżania
    res.status(200).send({
      id: user._id,
      accessToken: token,
      refreshToken: refreshToken,
    });
  } catch (err) {
    // Przekazujemy błąd do obsługi błędów
    next(err);
  }
};