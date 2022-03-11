const functions = require('firebase-functions');

exports.create = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.json({ result: 'User created!' });
});
