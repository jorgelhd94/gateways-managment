const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.create = functions.https.onCall(async (data, context) => {
  await admin
    .firestore()
    .collection('gateway')
    .add({ ...data })
    .then((response) => {
      return  response;
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });
});
