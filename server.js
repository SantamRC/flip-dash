require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
const mongoose = require("mongoose");
const Product = require("./models/products");

app.use(express.json());

mongoose
  .connect(`mongodb://localhost:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Successful"))
  .catch((err) => console.log(`Connection failed ! Error : ${err}`));

app.listen(port, () => {
  console.log("listening on port " + port);
});

app.post("/", (req, res) => {
  const data = new Product(req.body);
  data
    .save()
    .then(() => {
      res.send("Successfully Saved");
    })
    .catch((err) => res.status(400).send(err.message));
});

app.get("/Products", (req, res) => {
  try {
    Product.findOne().then((results) => {
      res.send(results);
    });
  } catch (err) {
    console.log(err);
    res.send(400).send(err.message);
  }
});
