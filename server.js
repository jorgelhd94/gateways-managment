/* eslint-disable no-undef */
const { https } = require('firebase-functions');
const { default: next } = require('next');
const admin = require('firebase-admin');

admin.initializeApp();

const server = next({
  dev: false,
  conf: { distDir: '.next' }
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => {
    return nextjsHandle(req, res);
  });
});

exports.users = require('./functions/users');
exports.gateway = require('./functions/gateway');
exports.device = require('./functions/device');
