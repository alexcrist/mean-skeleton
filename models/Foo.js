'use strict';

var mongoose = require('mongoose'),
    fooSchema = require('../schemas/FooSchema');

var model = mongoose.model('Foo', fooSchema);

module.exports = model;