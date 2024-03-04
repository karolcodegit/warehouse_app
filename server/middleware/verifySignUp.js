import db from '../models/index.js'
const ROLES = db.ROLES;
const User = db.User;

// Funkcja sprawdzająca, czy podany w żądaniu email już istnieje w bazie danych
const checkDuplicateEmail = async (req, res, next) => {
  try {
    // Szukamy użytkownika o podanym email
    const user = await User.findOne({ email: req.body.email });
    
    // Jeśli taki użytkownik istnieje, zwracamy błąd
    if (user) {
      return res.status(400).send({ message: 'Failed! Email is already in use!' });
    }
    // Jeśli nie znaleziono duplikatów, przechodzimy do następnego middleware
    next();
  } catch (err) {
    // W przypadku błędu zwracamy odpowiedź z kodem 500 i wiadomością błędu
    res.status(500).send({ message: err });
  }
};
// Funkcja sprawdzająca, czy podana w żądaniu rola istnieje w bazie danych
const checkRoleExisted = async (req, res, next) => {
  // Jeśli w żądaniu jest podana rola
  if (req.body.role && !ROLES.includes(req.body.role)) {
    return res.status(400).send({
      message: `Failed! Role ${req.body.role} does not exist!`
    });
  } 
  // Jeśli rola istnieje, przechodzimy do następnego middleware
  next();
};
// Eksportujemy nasze funkcje jako obiekt
const verifySignUp = {
  checkDuplicateEmail,
  checkRoleExisted
};

export default verifySignUp;