const express = require("express");
const app = express();

// Body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Import product route
const productRoute = require("./routes/product.route");
app.use("/v1/product", productRoute);

// Port connection
app.listen(8080, () => {
  console.log("Listen on the port 8080...");
});
