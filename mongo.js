const mongoose = require("mongoose");
const env = require("./env/environment");

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.cosmosPort}/?ssl=true&retryWrites=false`;

function connect() {
  mongoose.set("strictQuery", true);
  return mongoose.connect(mongoUri, {
    auth: { useMongoClient: true, username: env.dbName, password: env.key },
  });
}

module.exports = {
  connect,
  mongoose,
};
