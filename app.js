require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routeProduit = require("./routers/routeProduit");
const userRouter = require("./routers/userRouter");

const app = express();
const PORT = 7000;
// connecter la base de donneés
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database successfully.");
  })
  .catch((error) => {
    console.log("Connection to database failed:::", error);
  });
//Middleware

app.use(express.json());
app.use("/produits",routeProduit);
app.use("/users",userRouter);

//ecoute le port
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
