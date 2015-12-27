var controllers = require('../app/controllers')

module.exports = function (app) {
  app.get(  '/',           controllers.home);
  app.get(  '/characters', controllers.characters.all);
  app.post( '/characters', controllers.characters.create);
};
