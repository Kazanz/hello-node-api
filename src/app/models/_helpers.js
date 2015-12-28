module.exports = {
  serialize: function( fields ) {
    let data = {};
    for (var field of Object.keys(fields)) {
        data[field] = this[field];
    }
    return data;
  }
}


