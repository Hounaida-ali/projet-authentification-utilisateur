const productModel = require("../models/produitModel");

//afficher tous les produits

const afficheProduits = async (req, res) => {
    const products = await productModel.find();
    res.send(products);
};

//afficher un produit par son id

const afficheProduitId = async (req, res) => {
    const id = req.params.id;

    const product = await productModel.findById(id);

    if (!product) {
        res.status(404).send("Product not found.");
        return;
    }

    res.send({
        message: "Product found",
        product,
    });
};


//ajouter un produit

const addProduit = async (req, res) => {
    const { productName, price, stockStatus } = req.body;

    const allowedStatus = ["in-stock", "low-stock", "out-of-stock"];

    if (stockStatus && !allowedStatus.includes(stockStatus)) {
        // bad request
        res
            .status(400)
            .send(
                `The products stock status should be one the followings: ${allowedStatus}`
            );
        return;
    }

    const product = await productModel.create({
        productName,
        price,
        stockStatus,
    });

    res.send({
        message: "Product successfully added.",
        product,
    });
};
// mettre à jour un produit

const updateProduit = async(req, res) => {
    const id = req.params.id;
    const { productName, price } = req.body;

    const productExists = await productModel.findById(id);

    if (!productExists) {
        res.status(404).send("Product not found");
        return;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
        id,
        { productName, price },
        { new: true }
    );

    res.send({
        message: "Product updated successfully.",
        updatedProduct,
    });
};

const updateStock = async (req, res) => {
    const id = req.params.id;
    const stockStatus = req.params.status;

    const productExists = await productModel.findById(id);

    if (!productExists) {
        res.status(404).send("Product not found");
        return;
    }

    const allowedStatus = ["in-stock", "low-stock", "out-of-stock"];
    if (!allowedStatus.includes(stockStatus)) {
        // bad request
        res
            .status(400)
            .send(
                `The products stock status should be one the followings: ${allowedStatus}`
            );
        return;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
        id,
        { stockStatus },
        { new: true }
    );

    res.send({
        message: "Product status updated successfully.",
        updatedProduct,
    });
};

const deletedProduit = async (req, res) => {
    const id = req.params.id;

    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
        res.status(404).send("Product not found.");
        return;
    }

    res.send({
        message: "Product deleted successfully.",
        deletedProduct,
    });
};


module.exports = {
    afficheProduits,
    afficheProduitId,
    addProduit,
    updateProduit,
    updateStock,
    deletedProduit,
};  