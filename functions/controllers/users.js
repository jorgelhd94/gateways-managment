const functions = require('firebase-functions');

exports.create = functions.https.onRequest((request, response) => {
  response.json({ result: '' });
});
