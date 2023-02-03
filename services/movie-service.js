const { TopMovies } = require("../models");
const ReadPreference = require("mongodb").ReadPreference;

const env = require("../env/environment");

require("../mongo").connect();

function get(req, res) {
  const title = req.query.title;
  //   We need to always get the id from the movieDB api
  // because We most likely won't have the movie id at first in our db
  getMovie(title).then((movie) => {
    // TODO: change model to get relevant movie rating average for user
    const docquery = TopMovies.find({ _id: movie.id }).read(
      ReadPreference.NEAREST
    );
    docquery
      .exec()
      .then((movie) => {
        res.json(movie);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
}

async function getMovie(title) {
  const uri = `https://api.themoviedb.org/3/search/movie?api_key=${env.movieApiKey}&language=en-US&query=${title}`;
  const movieRes = await fetch(uri);
  const { results } = await movieRes.json();
  return results[0];
}

module.exports = { get };
