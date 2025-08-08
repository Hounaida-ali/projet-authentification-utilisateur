const mongoose = require("mongoose");

//schema user
const schema = mongoose.Schema({
    nameUser: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    } 
},
 {tamestamps:true}
);

// model user
const userModel = mongoose.model("users", schema)

module.exports = userModel;
