require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routeProduit = require("./routers/routeProduit");
const userRouter = require("./routers/userRouter.js");
const authMiddleware = require("./middlewares/authMiddleware");


const app = express();
const PORT = process.env.PORT ;
// connecter la base de donneés
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database successfully.");
  })
  .catch((error) => {
    console.log("Connection to database failed:::", error);
  });
// Middleware to handle any json payload data sent from a client
app.use(express.json());
// router
app.use("/products",routeProduit);
app.use("/users",userRouter);

app.post('/products', (req, res) => {
    res.send('Produit ajouté');
});

app.get("/test", authMiddleware,
  (req, res) => {
    // console.log("Controller request::", req.decoded);
    res.send({message: "message"});
  }
)

//ecoute le port
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
