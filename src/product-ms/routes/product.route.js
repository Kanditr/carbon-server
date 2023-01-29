const express = require("express");
const router = express.Router();
const productService = require("../services/product.service");

// mock - get all products
router.get("/", (request, response) => {
  const products = productService.getProducts();
  response.status(200).json(products);
});

// get all products
router.get("/all", async (request, response) => {
  const products = await productService.getAllProducts();
  response.status(200).send(products);
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
