const { Users } = require("../models");
const ReadPreference = require("mongodb").ReadPreference;

require("../mongo").connect();

function get(req, res) {
  const docquery = Users.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, email, picture, movies, relationScore } = req.body;

  const user = new Users({ id, name, email, picture, movies, relationScore });
  user
    .save()
    .then(() => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      // res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Users.findOneAndRemove({ id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
