const express = require("express");
const router = express.Router();
const productService = require("../services/product.service");

// product endpoint
router.get("/", (request, response) => {
  const products = productService.getProducts();
  response.send(products);
});

module.exports = router;
