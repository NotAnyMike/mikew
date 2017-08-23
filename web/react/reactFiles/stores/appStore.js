'use strict';

const EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../Dispatcher.js');

var _store = {};

var AppStore = assing({}, EventEmitter.prototype, {});

AppDispatcher.register(function(payload){});

module.exports = AppStore;
