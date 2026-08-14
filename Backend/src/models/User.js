import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  cartaoSus: { type: String, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

export default User;
