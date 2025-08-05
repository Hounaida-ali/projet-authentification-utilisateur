const mongoose = require('mongoose');

const schema = mongoose.schema({
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
})

const userModel = mongoose.model(users,schema);

module.exports = userModel();