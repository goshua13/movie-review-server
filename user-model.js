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

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
