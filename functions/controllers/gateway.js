const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.create = functions.https.onCall(async (data, context) => {  
  return {
    text: 'OK'
  };
});