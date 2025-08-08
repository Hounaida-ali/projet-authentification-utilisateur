const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");



router.get("/", productController.getProducts);
router.get("/:id", productController.getProductId); 
router.post("/", authMiddleware, productController.postProduct);
router.patch("/:id", authMiddleware, productController.updateProduct);
router.patch("/:id/stock", authMiddleware, productController.updateStock); 
router.delete("/:id", authMiddleware, productController.deletedProduct);




module.exports = router;