const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  price: {
    mrp: Number,
    discount: Number,
  },
  category: String,
  brand: String,
  rating: Number,
  url: String,
});

const Product = new mongoose.model("product", productSchema);

module.exports=Product;
