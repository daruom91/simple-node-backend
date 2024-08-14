const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
// middleware
app.use(express.json());

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:tn3M8bx1RI0PCSQQ@cluster0.e4bh4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => console.log("failed"));
