const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.register = functions.https.onCall(async (data, context) => {
  let user = '';
  await admin
    .auth()
    .createUser({
      email: data.email,
      password: data.password,
      displayName: data.name
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      user = userRecord;
    })
    .catch((error) => {
      return {
        user,
        error
      };
    });

  return {
    user
  };
});
