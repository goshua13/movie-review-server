const express = require("express");
const router = express.Router();

const userService = require("../user-service");

router.get("/users", (req, res) => {
  userService.get(req, res);
});

router.put("/user/:id", (req, res) => {
  userService.create(req, res);
});

router.post("/user", (req, res) => {
  userService.update(req, res);
});

router.delete("/user/:id", (req, res) => {
  userService.destroy(req, res);
});

module.exports = router;
