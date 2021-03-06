const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.create = functions.https.onCall(async (data) => {
  const docRef = await admin
    .firestore()
    .collection('gateway')
    .add({ ...data, devices: 0, imageUrl: '' })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { docId: docRef.id };
});

exports.edit = functions.https.onCall(async (data) => {
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

exports.delete = functions.https.onCall(async (data) => {
  await admin
    .firestore()
    .collection('gateway')
    .doc(data.id)
    .delete()
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  let devices = [];

  await admin
    .firestore()
    .collection('device')
    .where('gateway', '==', data.id)
    .get()
    .then((query) => {
      devices = query;
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  devices.forEach(async (doc) => {
    await admin
      .firestore()
      .collection('device')
      .doc(doc.id)
      .delete()
      .catch((error) => {
        throw new functions.https.HttpsError('aborted', error);
      });
  });

  return { docId: data.id };
});

exports.getDoc = functions.https.onCall(async (data) => {
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

exports.all = functions.https.onCall(async (data) => {
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

exports.validateSerial = functions.https.onCall(async (data) => {
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

exports.addImage = functions.https.onCall(async (data) => {
  await admin
    .firestore()
    .collection('gateway')
    .doc(data.docId)
    .update({ imageUrl: data.imageUrl })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  return { docId: data.docId };
});
