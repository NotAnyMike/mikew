'use strict';

const ReduceStore = require('flux/utils').ReduceStore,
			EventEmitter = require('events'),
			ActionTypes = require('./actionTypes.js'),
			WsDispatcher = require('./wsDispatcher.js'),
			EventTypes = require('./eventTypes.js');

const Functions = require('../utils/functions.js');

var _store = {}

class WsStore extends ReduceStore {

	constructor() {
		super(WsDispatcher);
	}

	static getInitialState(){
		return {}
	}

	static getIndex(){
		Functions.fetchAdvanced('/api/index/').then((resp) => resp.json()).then((json) => {
			console.log(json);
			_store.index = json;
			//emit event with index
			debugger
			WsStore.emit(EventTypes.Index, json);
		});
		return {title: "hol"};
	}

	static addIndexListener(callback) {
		this.addListener(EventTypes.Index, callback)
	}

	static removeIndexListener(callback){
		this.removeListener(EventTypes.Index, callback)
	}

	reduce(state, action){
		switch(action.type){
			case ActionTypes.GET_INDEX:
				this.getIndex()
				return _store;

			default:
				return _store;

		}
	}

};

module.exports = WsStore;
