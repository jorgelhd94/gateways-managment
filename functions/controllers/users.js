const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.addText = functions.https.onCall(async (data, context) => {
  let user = '';
  await admin
    .auth()
    .createUser({
      email: data.email,
      password: data.password,
      displayName: data.name,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      user = userRecord;
      
    })
    .catch((error) => {
      throw new functions.https.HttpsError('cancelled', 'Error: ' + error);
    });

    return {
      user,
      data
    };
});
