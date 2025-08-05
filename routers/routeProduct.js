const express = require("express");
const router = express.Router();

const produitController = require("../controllers/produitController");
const auth = require("../middleware/auth"); 
router.get("/", auth, produitController.afficheProduits);
router.get("/:id", auth, produitController.afficheProduitId); 
router.post("/", auth, produitController.addProduit);
router.patch("/", auth, produitController.updateProduit);
router.patch("/stock", auth, produitController.updateStock); 
router.delete("/", auth, produitController.deletedProduit);

module.exports = router;
