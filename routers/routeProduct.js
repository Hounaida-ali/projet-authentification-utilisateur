const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const auth = require("../middleware/auth"); 
router.get("/", auth, productController.afficheProduits);
router.get("/:id", auth, productController.afficheProduitId); 
router.post("/", auth, productController.addProduit);
router.patch("/", auth, productController.updateProduit);
router.patch("/stock", auth, productController.updateStock); 
router.delete("/", auth, productController.deletedProduit);

module.exports = router;
