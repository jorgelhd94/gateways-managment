const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.addText = functions.https.onCall((data, context) => {
  admin
    .auth()
    .createUser({
      email: 'user@example.com',
      password: 'secretPassword',
      displayName: 'John Doe',
      photoURL: 'http://www.example.com/12345678/photo.png',
      disabled: false
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      return {
        msg: 'Lo logramos perra'
      };
    })
    .catch((error) => {
      throw new functions.https.HttpsError('cancelled', 'Error: ' + error);
    });
});
