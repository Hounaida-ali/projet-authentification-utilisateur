const productModel = require("../models/productModel");

//afficher tous les produits

<<<<<<< HEAD
const afficheProducts = async (req, res) => {
=======
const getProducts = async (req, res) => {
>>>>>>> 1cc52b6 (la protection des routes)
    const products = await productModel.find();
    res.send(products);
};

//afficher un produit par son id

<<<<<<< HEAD
const afficheProducttId = async (req, res) => {
=======
const getProductId = async (req, res) => {
>>>>>>> 1cc52b6 (la protection des routes)
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

const postProduct = async (req, res) => {
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
        userId: req.decoded.userId // ID de l'utilisateur courant (connecté)
    });

    res.send({
        message: "Product successfully added.",
        product,
    });
};
// mettre à jour un produit

<<<<<<< HEAD
const updateProduct = async(req, res) => {
=======
const updateProduct = async (req, res) => {
>>>>>>> 1cc52b6 (la protection des routes)
    const id = req.params.id;
    const { productName, price } = req.body;

    const productExists = await productModel.findById(id);

    if (!productExists) {
        res.status(404).send("Product not found");
        return;
    }

    const updateProduct = await productModel.findByIdAndUpdate(
        id,
        { productName, price },
        { new: true }
    );

    res.send({
        message: "Product updated successfully.",
        updateProduct,
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

const deletedProduct = async (req, res) => {
    const id = req.params.id;

    // recupérer le produit
    // produit = productModel.findById(id)

    let product = await productModel.findById(id)

    // si produit.userId != req.decoded.userId => quitter avec un message
    console.log(product.userId != req.decoded.userId);
    
    if (product.userId != req.decoded.userId) {
        res.status(401).send("action not authorizied.");
        return;
    }
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
<<<<<<< HEAD
    afficheProducts,
    afficheProductId,
    addProduit,
=======
    getProducts,
    getProductId,
    postProduct,
>>>>>>> 1cc52b6 (la protection des routes)
    updateProduct,
    updateStock,
    deletedProduct,
};  