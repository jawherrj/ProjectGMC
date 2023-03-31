const mongoose = require("mongoose");
const rdvSchema = new mongoose.Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true },
  client: { type: mongoose.Types.ObjectId, ref: "client" },
});
module.exports = rdvModel = mongoose.model("rdv", rdvSchema);
