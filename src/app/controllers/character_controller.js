var orm     = require('orm');

module.exports = {
  get: function (req, res, next) {
    req.models.message.find().limit(4).order('-id').all(function (err, messages) {
      if (err) return next(err);

      var items = messages.map(function (m) {
        return m.serialize();
      });

      res.send({ items: items });
    });
  },
  create: function (req, res, next) {
    // var params = _.pick(req.body, 'title', 'body');
    var params = {"name": "bob", "race": "human", "calling": "Hacker"}

    req.models.message.create(params, function (err, message) {
      if(err) {
        if(Array.isArray(err)) {
          return res.send(200, { errors: helpers.formatErrors(err) });
        } else {
          return next(err);
        }
      }

      return res.send(200, message.serialize());
    });
  }
};
