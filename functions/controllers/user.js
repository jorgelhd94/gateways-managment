const functions = require("firebase-functions");

exports.login = functions.https.onRequest((request, response) => {
    response.json({result: "Hello MTF!"});
  });