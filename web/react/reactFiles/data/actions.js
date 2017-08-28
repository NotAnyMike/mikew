'use strict';

const ActionTypes = require('./actionTypes.js'),
			WsDispatcher = require('./wsDispatcher.js');

const Actions = {
	getProject(slug){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_PROJECT,
			slug: slug
		});
	},

	receiveProject(project){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_PROJECT,
			project: project,
		});
	},
	
	getProjects(){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_PROJECTS,
		});
	},

	receiveProjects(projects){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_PROJECTS,
			projects: projects,
		});
	},

	getBlog(slug){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_BLOG,
			slug: slug
		});
	},

	receiveBlog(blog){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_BLOG,
			blog: blog,
		});
	},
	
	getBlogs(){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_BLOGS,
		});
	},

	receiveBlogs(blogs){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_BLOGS,
			blogs: blogs,
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
};

module.exports = Actions;
