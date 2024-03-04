import mongoose from "mongoose";
import User from "./user.model.js";
import Role from "./role.model.js";
import refreshToken from "./refreshToken.model.js";

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.User = User;
db.Role = Role;
db.refreshToken  = refreshToken;


db.ROLES = ["user", "admin", "moderator", 'superAdmin'];

export default db;