import db from "../../models/index.js";

const User = db.User;
// Funkcja do zmiany hasła użytkownika
export const changePassword = async (req, res) => {
    try {
      // Szukamy użytkownika o podanym ID
      const user = await User.findById(req.userId);
      
      // Sprawdzamy, czy stare hasło jest poprawne
      const passwordIsValid = bcrypt.compareSync(
        req.body.oldPassword,
        user.password
      );
  
      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Old Password!" });
      }
  
      // Hashujemy nowe hasło
      user.password = bcrypt.hashSync(req.body.newPassword, 8);
  
      // Zapisujemy użytkownika z nowym hasłem
      await user.save();
  
      res.status(200).send({ message: "Password was changed successfully!" });
    } catch (err) {
      res.status(500).send({ message: err });
    }
  };