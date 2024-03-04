import User from "../models/user.model.js";
import verify from "../middleware/index.js";
import * as controller from "../controllers/user.controller.js";

const userRoutes = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [verify.authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [verify.authJwt.verifyToken],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [verify.authJwt.verifyToken],
    controller.adminBoard
  );

  // GET /api/users
  // Zwraca listę wszystkich użytkowników
  app.get("/api/users", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // GET /api/user
  // Zwraca dane użytkownika na podstawie przekazanego tokena
  app.get("/api/user", [verify.authJwt.verifyToken], async (req, res) => {
    try {
      const user = await User.findById(req.userId).exec();
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

 
};

export default userRoutes;
