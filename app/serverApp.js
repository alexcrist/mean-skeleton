'use strict';

var express = require('express'),
	app = express(),
	router = require('./routes/router'),
	path = require('path'),
	_ = require('underscore');

var PORT = 7777;

app.use(express.static(path.join(__dirname + '/public/')));

app.use(router);

app.listen(PORT, function() {
	console.log('Application live and running on port: ' + PORT);
});