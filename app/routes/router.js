'use strict';

var express = require('express'),
    controller = require('../controllers/mainController');

    var router = express.Router();

    router.route('/')
    .get(function(req, res, next) {
        res.sendFile(path.join(__dirname + '../public/index.html'));
    });

module.exports = router;
