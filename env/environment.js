const cosmosPort = 10255;
const dbName = "movie-review-server";

//  This key should be inside of a "Microsof Keyvault" or secrets inside of "Github"
const key =
  "cEZVbGKlMRHyIbuBtpEYZxf5u9hdJFVOOHOTr7g203Lb9vNY4Gzk0cTJtd936pOBdyZOshlmOCDuACDbVbDaFg==";

const movieApiKey = "8e24605c4044db8a5da3f305850c7fd2";

module.exports = {
  cosmosPort,
  dbName,
  key,
  movieApiKey,
};
