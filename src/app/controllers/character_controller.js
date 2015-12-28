var _       = require('lodash'),
    orm     = require('orm'),
    helpers = require('./_helpers');

module.exports = {
  all: (req, res, next) => {
    req.models.character.find().limit(20).order('-id').all(function (err, messages) {
      if (err) return next(err);

      var items = messages.map(function (m) {
        return m.serialize();
      });

      res.send({ items: items });
    });
  },

  create: (req, res, next) => {
    let character = req.models.character;
    let params = _.pick(req.json || req.body, character.fields);
    character.create(params, function (err, obj) {
        var form = new helpers.ModelForm(err, obj, res, next);
        return form.evaluate();
    });
  }
};
