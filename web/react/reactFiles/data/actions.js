'use strict';

const ActionTypes = require('./actionTypes.js'),
			WsDispatcher = require('./wsDispatcher.js');

const Actions = {
	getBlogs(){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_BLOGS,
		});
	},

	getBlog(slug){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_BLOG,
			slug: slug
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

	receiveBlog(blog){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_BLOG,
			blog: blog,
		});
	},

	receiveBlogs(blogs){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_BLOGS,
			blogs: blogs,
		});
	},
};

module.exports = Actions;
