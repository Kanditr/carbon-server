const express = require("express");
const router = express.Router();
const productService = require("../services/product.service");

// get all products
router.get("/", (request, response) => {
  const products = productService.getProducts();
  response.status(200).json(products);
});

// get one product by id
router.get("/:id", async (request, response) => {
  const id = request.params.id;
  const product = await productService.getOneProduct(id);
  if (product) {
    response.status(200).json(product);
  } else {
    response.status(404).send("Product not found");
  }
});

module.exports = router;
