var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('timeline/index', {file: 'timeline'});
});

module.exports = router;
