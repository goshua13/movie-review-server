const { TopMovies } = require("../models");
const ReadPreference = require("mongodb").ReadPreference;

const env = require("../env/environment");

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

async function getTopMovies(page = 1) {
  const uri = `https://api.themoviedb.org/3/movie/now_playing?api_key=${env.movieApiKey}&language=en-US&page=${page}&dates=`;
  const movieRes = await fetch(uri);
  const { results } = await movieRes.json();
  return results;
}

function updateTopMovies(req, res) {
  const { page } = req.body;
  getTopMovies(page).then((movies) => {
    const movieList = movies.map((movie) => TopMovies(movie));
    TopMovies.insertMany(movieList, (err, doc) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.json(movies);
        console.log("success");
      }
    });
  });
}

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

module.exports = { get, create, updateTopMovies };
