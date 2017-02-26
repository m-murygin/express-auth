'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/authapp');

const db = mongoose.connection;

module.exports = db;
