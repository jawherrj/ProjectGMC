const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: Number },
  adresse: { type: String },
  password: { type: String },
  birthday: { type: Date },
  created_at: { type: Date, default: Date.now },
  isBane: { type: Boolean, default: false },
  img: { type: String },
  role: {
    type: String,
    enum: ["client", "mechanic", "admin"],
    default: "client",
  },
});
module.exports = userModel = mongoose.model("user", userSchema);
