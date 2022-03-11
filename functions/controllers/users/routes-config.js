const { create } = require('./users');

function routes(app) {
    app.post('/users', create);
  };

exports.routesConfig = routes; 
