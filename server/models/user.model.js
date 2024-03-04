import mongoose from "mongoose";

const User = mongoose.model(
    "User",
    new mongoose.Schema({
      name: String,
      surname: String,
      email: String,
      password: String,
      gender: String,
      createdAt: { type: Date, default: Date.now },
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
    },{timestamps: true})
  );
  

export default User
