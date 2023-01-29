const express = require("express");
const router = express.Router();
const userService = require("../services/user.service");

// mock - get all products
router.get("/", (request, response) => {
  const users = userService.getUsers();
  response.status(200).json(users);
});

module.exports = router;
