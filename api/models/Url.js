const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema);