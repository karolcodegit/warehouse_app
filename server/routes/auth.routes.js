// Importujemy potrzebne moduły i kontrolery
import verify from "../middleware/index.js";
import { signin } from '../controllers/Login/signin.js';
import { signup } from '../controllers/Registration/signup.js';
import { refreshToken } from '../controllers/Login/tokenRefreshHelpers.js';

// import { signup, signin, refreshToken } from "../controllers/auth.controller.js";
// import bcrypt from 'bcrypt';

// Definiujemy funkcję, która dodaje ścieżki autoryzacji do aplikacji
const authRoutes = function(app) {
  // Dodajemy middleware, który ustawia nagłówki odpowiedzi
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  // Dodajemy ścieżkę do rejestracji
  // Używamy middleware do sprawdzenia, czy nazwa użytkownika lub email nie są już używane
  // i czy role istnieją
  app.post(
    "/api/auth/signup",
    [
      verify.verifySignUp.checkDuplicateEmail,
      verify.verifySignUp.checkRoleExisted
    ],
    signup
  );

  // Dodajemy ścieżkę do logowania
  app.post("/api/auth/signin", signin);
  app.post("/api/auth/refreshtoken", refreshToken);
};

// Eksportujemy funkcję, aby mogła być użyta w innych częściach aplikacji
export default authRoutes;