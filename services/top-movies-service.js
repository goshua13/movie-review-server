const { TopMovies } = require("../models");
const ReadPreference = require("mongodb").ReadPreference;

require("../mongo").connect();

function get(req, res) {
  const docquery = TopMovies.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((topMovies) => {
      res.json(topMovies);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const topMovie = new TopMovies(req.body);
  topMovie
    .save()
    .then(() => {
      res.json(topMovie);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = { get, create };
