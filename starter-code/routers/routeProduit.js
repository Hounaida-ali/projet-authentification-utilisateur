const express = require("express");

const router = express.Router();


const produitController = require("../controllers/produitController");
router.get("/",produitController.afficheProduits);
router.get("/",produitController.afficheProduitId);
router.post("/",produitController.addProduit);
router.patch("/",produitController.updateProduit);
router.patch("/",produitController.updateStock);
router.delete("/",produitController.deletedProduit);



module.exports = router;