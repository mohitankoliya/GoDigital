const mongoose = require("mongoose");

const imps = mongoose.model('imps', new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId },
  paytm: { type: String, default: null },
  phonepe: { type: String, default: null },
  googlepay: { type: String, default: null },
  date: { type: Date, default: new Date() },
  last_updated: { type: Date, default: null }
}));

exports.imps = imps;