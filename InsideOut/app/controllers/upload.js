var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('upload/index', {file: 'upload'});
});

module.exports = router;
