'use strict';

var express = require('express'),
    app = express(),
    router = require('./routes/router'),
    path = require('path'),
    _ = require('underscore'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var PORT = 7777;

app.use(express.static(path.join(__dirname + '/public/')));

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, function() {
    console.log('Application live and running on port: ' + PORT);
});

var mongoUri = 'mongodb://localhost:27017/skeleton';
console.log('Connecting to MongoDB at ' + mongoUri);
mongoose.connect(mongoUri);