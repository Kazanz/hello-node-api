module.exports = {
  home       : (req, res, next) => res.send("Nothing Here"),
  characters : require('./character_controller'),
};
