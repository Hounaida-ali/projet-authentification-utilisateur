const express = require('express');
const router = express.Router();

const {register,verifyOtp,login,reinisilize,resetPassword} = require("../controllers/userController");

router.post ("/register",register);
router.patch("/verify-email", verifyOtp);
router.post ("/login",login);
router.post("/reinisilize", reinisilize);
router.patch("/resetPassword", resetPassword);




module.exports = router;

