'use strict';

const ActionTypes = require('./actionTypes.js'),
			WsDispatcher = require('./wsDispatcher.js');

const Actions = {
	getBlogs(){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_BLOGS,
		});
	},

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
	},

	receiveBlogs(blogs){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_BLOGS,
			blogs: blogs,
		});
	}
};

module.exports = Actions;
