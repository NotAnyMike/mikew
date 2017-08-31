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
	
	getProjects(lang){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_PROJECTS,
			lang: lang,
		});
	},

	receiveProjects(projects){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_PROJECTS,
			projects: projects,
		});
	},

	getWriting(slug){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_WRITING,
			slug: slug
		});
	},

	receiveWriting(writing){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_WRITING,
			writing: writing,
		});
	},
	
	getWritings(lang){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_WRITINGS,
			lang: lang,
		});
	},

	receiveWritings(writings){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_WRITINGS,
			writings: writings,
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
	
	getBlogs(lang){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_BLOGS,
			lang: lang
		});
	},

	receiveBlogs(blogs){
		WsDispatcher.dispatch({
			type: ActionTypes.RECEIVE_BLOGS,
			blogs: blogs,
		});
	},

	getIndex(lang){
		WsDispatcher.dispatch({
			type: ActionTypes.GET_INDEX,
			lang: lang,
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
