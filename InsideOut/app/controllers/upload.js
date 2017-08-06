var express = require('express');
var router = express.Router();
var Model = require('../models/upload');
var fileUpload = require('express-fileupload');

router.get('/', function(req, res) {
    res.render('upload/index', {file: 'upload'});
});

router.post('/submit', function(req, res) {
    try {

        if (!req.files) {
            res.status(400).send("No files were uploaded! >:(");
        }

        var product = req.files.product.name;
        var docFile = req.files.product;

        var params = {
            'title': req.body.title,
            'description': req.body.description,
            'document': product,
            'cost': parseFloat(req.body.cost_dollars + "." + req.body.cost_cents),
            'date': new Date().toISOString()
        };

        var result = Model.createRecord(params);

        if (result) {

            var target = "./uploads/" + product;
            console.log(target);

            docFile.mv(target, function(err) {
                if (err) {
                    res.status(500).send(err);
                }
            });

            res.redirect("/");

        } else {
            res.redirect("/upload");
        }
    } catch(e) {
        console.log(e);
    }

});

module.exports = router;
