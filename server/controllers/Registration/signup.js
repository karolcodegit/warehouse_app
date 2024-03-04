// Importujemy potrzebne moduły i modele
import config from "../../config/auth.config.js";
import db from "../../models/index.js";
import bcrypt from "bcryptjs";

// Definiujemy modele, które będziemy używać
const User = db.User;
const Role = db.Role;

// Funkcja do rejestracji nowego użytkownika
export const signup = async (req, res, next) => {
  try {
    console.log(req.body);

    // Sprawdzamy, czy wszystkie wymagane pola są obecne
    if (!req.body.name || !req.body.surname || !req.body.email || !req.body.password || !req.body.gender) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // Sprawdzamy, czy użytkownik z tym adresem e-mail już istnieje
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({ message: "Email is already in use" });
    }
    // Tworzymy nowego użytkownika z danymi z żądania
    const user = new User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 8), // Hashujemy hasło przed zapisaniem
      gender: req.body.gender,
      createAt: {
        type: Date,
        default: Date.now
      }
    });

    // Zapisujemy użytkownika do bazy danych
    const newUser = await user.save();

    // Jeśli w żądaniu są role, przypisujemy je do użytkownika
    if (req.body.roles) {
      const roles = await Role.find({ _id: { $in: req.body.roles } });
      newUser.roles = roles.map((role) => role._id);
    } else {
      // Jeśli w żądaniu nie ma ról, przypisujemy rolę "user"
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    // Zapisujemy użytkownika z przypisanymi rolami
    await newUser.save();

    // Wysyłamy odpowiedź, że rejestracja przebiegła pomyślnie
    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    // Przekazujemy błąd do obsługi błędów
    next(err);
  }
};