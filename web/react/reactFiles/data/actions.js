'use strict';

const ActionTypes = require('./actionTypes.js'),
			WsDispatcher = require('./wsDispatcher.js');

const Actions = {
	getIndex(){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_INDEX,
		});
	}
};

module.exports = Actions;
