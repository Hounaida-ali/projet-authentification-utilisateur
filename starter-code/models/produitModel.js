const mongoose = require("mongoose");
// schema for product

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
// model for product
const productModel = mongoose.model("produits", schema);

module.exports = productModel;