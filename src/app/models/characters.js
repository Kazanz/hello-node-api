var moment = require('moment'),
    helpers = require('./_helpers'),
    validators = require('./validators');

module.exports = function (orm, db) {
  var character_fields = {
    name      : { type: 'text', required: true },
    race      : { type: 'text', required: true },
    calling   : { type: 'text', required: true },
    createdAt : { type: 'date', required: true, time: true }
  };
  db.define('character', character_fields, {
    hooks: {
      beforeValidation: function () {
        this.createdAt = new Date();
      }
    },
    validations: {
      name    : validators.length(50),
      race    : validators.length(50),
      calling : validators.length(50)
    },
    methods: {
      serialize: function () {
        return helpers.serialize.call(this, character_fields);
      },
      fields: function () {
          return Object.keys(character_fields)
      }
    }
  });

  var race_fields = { name: { type: 'text', required: true } }
  db.define('race', race_fields, {
    validations: { name: validators.length(50) },
    methods: {
      serialize: function() {
        return helpers.serialize.call(this, race_fields);
      }
    }
  });

  var calling_fields = { name: { type: 'text', required: true } }
  db.define('calling', calling_fields, {
    validations: { name: validators.length(50) },
    methods: {
      serialize: function() {
        return helpers.serialize.call(this, calling_fields);
      }
    }
  });
};
