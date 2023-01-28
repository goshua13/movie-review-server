const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    movies: Array,
    relationScore: [{ movieId: Number, movieName: String, score: Number }],
  },
  { autoIndex: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
