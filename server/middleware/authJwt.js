import jwt from "jsonwebtoken";
import config from "../config/auth.config.js";
import db from "../models/index.js";

const userModel = db.User;
const roleModel = db.Role;

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.status(401).send({ message: "Unauthorized!" });
}

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "Authentication token is missing." });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return catchError(err, res);
    }

    req.userId = decoded.id;
    next();
  });
}

const checkRoles = roles => async (req, res, next) => {
  try {
    const user = await userModel.findById(req.userId).exec();
    const userRoles = await roleModel.find({ _id: { $in: user.roles } }).exec();

    if (userRoles.some(r => roles.includes(r.name))) {
      next();
    } else {
      res.status(403).send({ message: `Require one of these roles: ${roles.join(', ')}` });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const authJwt = {
  verifyToken,
  checkRoles
};

export default authJwt;