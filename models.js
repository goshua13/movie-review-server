const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    movies: [String],
    relationScore: [Number],
  },
  { autoIndex: false }
);

const topMoviesSchema = new Schema(
  {
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [Number],
    id: Number,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Float32Array,
    poster_path: String,
    release_date: String,
    title: String,
    video: Boolean,
    vote_average: Float32Array,
    vote_count: Number,
  },
  { autoIndex: false }
);

const Users = mongoose.model("Users", usersSchema);
const TopMovies = mongoose.model("TopMovies", topMoviesSchema);

module.exports = { Users, TopMovies };
