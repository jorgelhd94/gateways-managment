const { https } = require('firebase-functions');
const { default: next } = require('next');

const dotenv = require('dotenv');
dotenv.config();

// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDev,
  //location of .next generated after running -> yarn build
  conf: { distDir: '.next' }
});
console.log(server);

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => {
    return nextjsHandle(req, res);
  });
});
