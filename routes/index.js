const express = require("express");
const router = express.Router();

const userService = require("../services/user-service");
const topMoviesService = require("../services/top-movies-service");

router.post("/users/login", (req, res) => {
  userService.login(req, res);
});
router.get("/users", (req, res) => {
  userService.get(req, res);
});
router.put("/users/:id", (req, res) => {
  userService.create(req, res);
});
router.delete("/users/:id", (req, res) => {
  userService.destroy(req, res);
});

//This api should only be run once every month.
router.post("/top-movies/update", async (req, res) => {
  topMoviesService.updateTopMovies(req, res);
});

router.post("/top-movies", (req, res) => {
  topMoviesService.get(req, res);
});

module.exports = router;
