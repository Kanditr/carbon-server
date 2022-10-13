const express = require("express");
const app = express();

app.get("/test", (request, response) => {
  response.send("Hi there");
});

app.get("/try", (request, response) => {
  response.send("Hi Gun");
});

app.listen(3001, () => {
  console.log("Listen on the port 3001...");
});
