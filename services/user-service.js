const { Users } = require("../models");
const ReadPreference = require("mongodb").ReadPreference;

require("../mongo").connect();

async function _createUser(body) {
  const { id, name, email, picture = "" } = body;

  const user = new Users({ _id: id, name, email, picture });
  console.log({ user, body });
  await user.save();
  return user;
}

function login(req, res) {
  Users.findOne(
    { $or: [{ _id: req.body.id }, { email: req.body.email }] },
    function (err, user) {
      if (err) {
        return res.status(500).send(err);
      }
      if (!user) {
        // TODO: rewrite this funcionality
        return _createUser(req.body)
          .then((user) => {
            return res.status(200).send(user);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send(err);
          });
      }

      return res.status(200).send("You are logged in succesfully.");
    }
  );
}

function create(req, res) {
  return _createUser(req.body)
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}

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

module.exports = { get, create, login, destroy };
