const express = require("express");
const router = express.Router();

const userService = require("../services/user-service");
const topMoviesService = require("../services/top-movies-service");

router.get("/users", (req, res) => {
  userService.get(req, res);
});
router.put("/users/:id", (req, res) => {
  userService.create(req, res);
});
router.post("/users", (req, res) => {
  userService.update(req, res);
});
router.delete("/users/:id", (req, res) => {
  userService.destroy(req, res);
});

router.post("/top-movies/update", (req, res) => {
  topMoviesService.updateTopMovies(req, res);
});

router.post("/top-movies", (req, res) => {
  topMoviesService.create(req, res);
});

module.exports = router;
