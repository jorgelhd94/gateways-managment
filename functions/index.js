const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.login = functions.https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  return { text: 'Hello MTF, you are loggin' };
});
