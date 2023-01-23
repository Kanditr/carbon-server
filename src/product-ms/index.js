const express = require("express");
const app = express();

// Body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Test endpoint
app.get("/v1/product", (request, response) => {
  response.send("Hi /v1/product");
});

// Port connection
app.listen(8080, () => {
  console.log("Listen on the port 8080...");
});
