const cosmosPort = 10255;
const dbName = "movie-review-server";

//  This key should be inside of a "Microsof Keyvault" or secrets inside of "Github"
const key =
  "cEZVbGKlMRHyIbuBtpEYZxf5u9hdJFVOOHOTr7g203Lb9vNY4Gzk0cTJtd936pOBdyZOshlmOCDuACDbVbDaFg==";

module.exports = {
  cosmosPort,
  dbName,
  key,
};
