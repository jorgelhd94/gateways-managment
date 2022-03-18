const functions = require('firebase-functions');
const admin = require('firebase-admin');

const changeGatewayDevices = async (gatewayID, increment) => {
  let gateway = null;
  let newCount = 0;

  await admin
    .firestore()
    .collection('gateway')
    .doc(gatewayID)
    .get()
    .then((result) => {
      gateway = result.data();
      newCount = increment ? gateway.devices + 1 : gateway.devices - 1;
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  await admin
    .firestore()
    .collection('gateway')
    .doc(gatewayID)
    .update({ devices: newCount })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });
};

exports.create = functions.https.onCall(async (data, context) => {
  const docRef = await admin
    .firestore()
    .collection('device')
    .add({ ...data })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  changeGatewayDevices(data.gateway, true);

  return { docId: docRef.id };
});

exports.edit = functions.https.onCall(async (data, context) => {
  let doc = [];
  await admin
    .firestore()
    .collection('device')
    .doc(data.docId)
    .get()
    .then((result) => {
      doc = result.data();
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  await admin
    .firestore()
    .collection('device')
    .doc(data.docId)
    .update({ uid: data.uid, vendor: data.vendor, gateway: data.gateway, online: data.online })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  if (doc.gateway !== data.gateway) {
    await changeGatewayDevices(data.gateway, true);
    await changeGatewayDevices(doc.gateway, false);
  }

  return { docId: data.docId };
});

exports.delete = functions.https.onCall(async (data, context) => {
  let doc = [];

  await admin
    .firestore()
    .collection('device')
    .doc(data.id)
    .get()
    .then((result) => {
      doc = result.data();
    })
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  await admin
    .firestore()
    .collection('device')
    .doc(data.id)
    .delete()
    .catch((error) => {
      throw new functions.https.HttpsError('aborted', error);
    });

  await changeGatewayDevices(doc.gateway, false);

  return { docId: data.id };
});

exports.getDoc = functions.https.onCall(async (data, context) => {
  const docId = data.docId;
  let doc = [];

  await admin
    .firestore()
    .collection('device')
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
  const user = data.user;
  const listAll = [];

  await admin
    .firestore()
    .collection('device')
    .where('user', '==', user)
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

exports.getByGateway = functions.https.onCall(async (data, context) => {
  const gateway = data.gateway;
  const listAll = [];

  await admin
    .firestore()
    .collection('device')
    .where('gateway', '==', gateway)
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
