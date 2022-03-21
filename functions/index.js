// const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.users = require('./controllers/users');
exports.gateway = require('./controllers/gateway');
exports.device = require('./controllers/device');
exports.server = require('../server');
