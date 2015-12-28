var models = require('../app/models/');

models(function (err, db) {
  console.log("Syncing!");
  if (err) throw err;

  db.drop(function (err) {
    if (err) throw err;

    db.sync(function (err) {
      if (err) throw err;

      db.close()
      console.log("Done!");
    });
  });
});
