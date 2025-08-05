const mongoose = require("mongoose");

// schema 
const schema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stockStatus: {
    type: String,
    enum: ["in-stock", "low-stock", "out-of-stock"],
    default: "in-stock",
  },
});
// modele
const produitModel = mongoose.model("produits", schema);
module.exports = produitModel();