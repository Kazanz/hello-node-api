var path     = require('path'),
    express  = require('express'),
    settings = require('./settings'),
    models   = require('../app/models/'),
    bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  app.use(function (req, res, next) {
    models(function (err, db) {
      if (err) return next(err);

      req.models = db.models;
      req.db     = db;

      return next();
    });
  })
};
