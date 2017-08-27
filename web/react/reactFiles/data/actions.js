'use strict';

const ActionTypes = require('./actionTypes.js'),
			WsDispatcher = require('./wsDispatcher.js');

const Actions = {
	getIndex(){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_INDEX,
		});
	},

	receiveIndex(index){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_INDEX,
			index: index,
		});
	}
};

module.exports = Actions;
