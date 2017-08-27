'use strict';

import {ReduceStore} from 'flux/utils';
import ActionTypes from './actionTypes.js';
import Actions from './actions.js';
import WsDispatcher from './wsDispatcher.js';
import EventTypes from './eventTypes.js';

import Functions from '../utils/functions.js';

var _store = {
	index: {},
	blogs: {},
	moto: {},
}

class WsStore extends ReduceStore {

	constructor() {
		super(WsDispatcher);
	}

	getInitialState(){
		return {index: {
			moto: {
				author: "Eleanor Rossevelt",
				text: "You must do the things you think you cannot do",
			},
			shortInfo: {text: "I’m Mike Woodcock, an Economist, student of matematics and empirical engineer. Currently working on Artificial Intelligence, Simulation and Distributed Applications.<br> </br>Always open to new an interesting projects."},
		}}
	}

	getIndex(){
		Functions.fetchAdvanced('/api/index/').then((resp) => resp.json()).then((json) => {
			_store.index = json;
			//emit event with index
			Actions.receiveIndex(json);
		});
		return _store.index
	}

	addIndexListener(callback) {
		this.addListener(EventTypes.Index, callback)
	}

	removeIndexListener(callback){
		this.removeListener(EventTypes.Index, callback)
	}

	reduce(state, action){
		switch(action.type){
			case ActionTypes.GET_INDEX:
				this.getIndex()
				return _store

			case ActionTypes.RECEIVE_INDEX:
				_store.index = action.index
				_store.moto = action.index.moto
				return _store;

			default:
				return _store;

		}
	}

};

export default new WsStore();
