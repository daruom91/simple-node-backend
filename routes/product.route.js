const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const {
  createProucts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/", createProucts);

router.get("/:id", getProductById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
