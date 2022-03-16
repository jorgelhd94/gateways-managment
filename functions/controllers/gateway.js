const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.create = functions.https.onCall(async (data, context) => {
  const docRef = await admin
    .firestore()
    .collection('gateway')
    .add({ ...data })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { docId: docRef.id };
});

exports.all = functions.https.onCall(async (data, context) => {
  const uid = data.uid;
  const listAll = []

  await admin
    .firestore()
    .collection('gateway')
    .where('uid', '==', uid)
    .get()
    .then((result) => {
      listAll.push(result.size);
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { listAll };
});

exports.validateSerial = functions.https.onCall(async (data, context) => {
  const serial = data.value;
  let exists = false;

  await admin
    .firestore()
    .collection('gateway')
    .where('serial', '==', serial)
    .get()
    .then((result) => {
      exists = result.size > 0;
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { exists };
});
