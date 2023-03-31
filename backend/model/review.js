const mongoose = require("mongoose");
const reviewshema = new mongoose.Schema({
  rate: { type: Number, default: 0 },
  comment: { type: String },
  mechanic: { type: mongoose.Types.ObjectId, ref: "mechanic" },
  user: String,
});
const review = mongoose.model("review", reviewshema);
module.exports = review;
