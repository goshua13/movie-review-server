const { Double, Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  movies: [String],
  relationScore: [Number],
});

const topMoviesSchema = new Schema({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  original_language: String,
  original_title: { type: String, require: true },
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: { type: String, require: true },
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

const Users = mongoose.model("Users", usersSchema);
const TopMovies = mongoose.model("TopMovies", topMoviesSchema);

module.exports = { Users, TopMovies };
