const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  price: { type: String, required: true },
  name: { type: String, required: true },
  whats: { type: Number, required: true },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Parking", Schema);
