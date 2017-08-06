var db = require('../../config/database');

module.exports = {
    createRecord: function(params) {

        var sql = "INSERT INTO products SET ?";

        var result = false;

        result = db.query(sql, params, function (err, result) {
            if (err) return false;
        });

        return result;
    }

};
