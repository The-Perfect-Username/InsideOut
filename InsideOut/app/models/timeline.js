var db = require('../../config/database');
var res;

function callback(val) {
    res = val;
}

module.exports = {

    getRecords: function() {

        var sql = "SELECT * FROM products ORDER BY id DESC";

        db.query(sql, function (err, result) {
            if (err) console.log(err);
            callback(result);
            callback(result);
            callback(result);
            callback(result);
            callback(result);
        });

        return res;
    }

};
