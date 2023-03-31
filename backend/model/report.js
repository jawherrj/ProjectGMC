const mongoose = require("mongoose");
const reportshema = new mongoose.Schema({
  description: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "user" },
  violation: {
    type: String,
    enum: ["terms_of_service", "paiment", "bad_language", "autres"],
    default: "terms_of_service",
  },
});
const report = mongoose.model("report", reportshema);
module.exports = report;
