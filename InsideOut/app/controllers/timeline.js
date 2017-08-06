var express = require('express');
var router = express.Router();
var Model = require('../models/timeline');

router.get('/', function(req, res) {
    var product = Model.getRecords();

    if (req.session.num === 0) {
        req.session.num = 1;
    } else {
        req.session.num = 0;
    }
    console.log(req.session.num);
    res.render('timeline/index', {file: "timeline", num: req.session.num});
});

module.exports = router;
