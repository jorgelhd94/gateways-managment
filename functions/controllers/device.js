const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.create = functions.https.onCall(async (data, context) => {
  const docRef = await admin
    .firestore()
    .collection('device')
    .add({ ...data })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  let gateway = null;

  await admin
    .firestore()
    .collection('gateway')
    .doc(data.gateway)
    .get()
    .then((result) => {
      gateway = result.data();
    });

  await admin
    .firestore()
    .collection('gateway')
    .doc(data.gateway)
    .update({ devices: gateway.devices + 1 })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { docId: docRef.id };
});

exports.edit = functions.https.onCall(async (data, context) => {
  await admin
    .firestore()
    .collection('gateway')
    .doc(data.docId)
    .update({ serial: data.serial, name: data.name, ipv4: data.ipv4 })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { docId: data.docId };
});

exports.delete = functions.https.onCall(async (data, context) => {
  await admin
    .firestore()
    .collection('gateway')
    .doc(data.id)
    .delete()
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { docId: data.id };
});

exports.getDoc = functions.https.onCall(async (data, context) => {
  const docId = data.docId;
  let doc = [];

  await admin
    .firestore()
    .collection('gateway')
    .doc(docId)
    .get()
    .then((result) => {
      doc = result.data();
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { doc };
});

exports.all = functions.https.onCall(async (data, context) => {
  const uid = data.uid;
  const listAll = [];

  await admin
    .firestore()
    .collection('gateway')
    .where('uid', '==', uid)
    .get()
    .then((result) => {
      result.forEach((doc) => {
        listAll.push({
          ...doc.data(),
          docId: doc.id
        });
      });
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { listAll };
});

exports.listGateways = functions.https.onCall(async (data, context) => {
  const uid = data.uid;
  const listAll = [];

  await admin
    .firestore()
    .collection('gateway')
    .where('uid', '==', uid)
    .where('devices', '<', 10)
    .get()
    .then((result) => {
      result.forEach((doc) => {
        listAll.push({
          ...doc.data(),
          docId: doc.id
        });
      });
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { listAll };
});

exports.validateUID = functions.https.onCall(async (data, context) => {
  const uid = data.value;
  let exists = false;

  await admin
    .firestore()
    .collection('device')
    .where('uid', '==', uid)
    .get()
    .then((result) => {
      exists = result.size > 0;
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { exists };
});
