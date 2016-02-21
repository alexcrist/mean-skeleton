'use strict';

var mongoose = require('mongoose');

var fooSchema = new mongoose.Schema({
    title: String,
    id: Number
});

module.exports = fooSchema;