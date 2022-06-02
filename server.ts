require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Successful"))
  .catch((err:any) => console.log(`Connection failed ! Error : ${err}`));


app.listen(port, () => {
  console.log("listening on port " + port);
});