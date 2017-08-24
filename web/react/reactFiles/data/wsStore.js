'use strict';

const ReduceStore = require('flux/utils').ReduceStore,
			ActionTypes = require('./actionTypes.js'),
			WsDispatcher = require('./wsDispatcher.js');

class WsStore extends ReduceStore {

	constructor() {
		super(WsDispatcher);
	}

	static getInitialState(){
		return {}
	}

	static getIndex(){
		return {title: "hol"};
	}

	reduce(state, action){
		switch(action.type){
			case ActionTypes.GET_INDEX:
				//TODO
				return state;

			default:
				return state;

		}
	}

};

module.exports = WsStore;
