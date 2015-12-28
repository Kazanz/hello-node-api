var orm = require('orm');

module.exports = {
    length: max => {
        let msg = "cannot be longer than X letters".replace('X', max);
        return [
            orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
            orm.enforce.ranges.length(undefined, max, msg)
        ]
    } 
}
