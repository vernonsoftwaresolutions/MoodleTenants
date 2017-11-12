var express = require('express');

module.exports = function(app, basepath) {
  var router = express.Router();

  router.get('/tenants', function (req, res, next) {
    res.json({});
  })

  router.post('/tenants', function (req, res, next) {
    res.json({});
  })

  app.use(basepath, router);
}

