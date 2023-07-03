//load env variable
require("dotenv").config();
//import express
const express = require("express");
const app = express();

//import morgan
const morgan = require("morgan");
const AnimalRouter = require("./controllers/animal");
//import method-override
const methodOverride = require("method-override");
////////////
//middle ware
//////////////
app.use(express.static("public"))
//allow to reade from the form
app.use(express.urlencoded()); //allows the the req.body to be read from the form
app.use(methodOverride("_method"));
app.use("/animal", AnimalRouter);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});
