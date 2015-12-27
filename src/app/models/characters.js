var moment = require('moment');

module.exports = function (orm, db) {
  var textval = [
    orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
    orm.enforce.ranges.length(undefined, 50, "cannot be longer than 50 letters")
  ];

  var Character = db.define('character', {
    name      : { type: 'text', required: true },
    race      : { type: 'text', required: true },
    calling   : { type: 'text', required: true },
    createdAt : { type: 'date', required: true, time: true }
  },
  {
    hooks: {
      beforeValidation: function () {
        this.createdAt = new Date();
      }
    },
    validations: {
      name    : textval,
      race    : textval,
      calling : textval
    },
    methods: {
      serialize: function () {
        return {
          id        : this.id,
          title     : this.name,
          body      : this.calling,
          createdAt : moment(this.createdAt).fromNow(),
        };
      }
    }
  });
};
