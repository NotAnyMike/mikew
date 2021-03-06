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
	blog: {},
	projects: {},
	project: {},
	writings: {},
	writing: {},
	moto: {},
}

class WsStore extends ReduceStore {

	constructor() {
		super(WsDispatcher);
	}

	getInitialState(){
		return {
			index: {
				moto: {
					author: "Eleanor Rossevelt",
					text: "You must do the things you think you cannot do",
				},
				shortInfo: {text: "I’m Mike Woodcock, an Economist, student of matematics and empirical engineer. Currently working on Artificial Intelligence, Simulation and Distributed Applications.<br> </br>Always open to new an interesting projects."},
			},
			moto: {},
			blogs: [],
			blog: {},
			projects: [],
			project: {},
			writings: [],
			writing: {},
		}
	}

	getIndex(lang){
		var path = "";
		if(lang==='es') path = '/api/es/index/';
		else path = '/api/en/index/';
		Functions.fetchAdvanced(path).then((resp) => resp.json()).then((json) => {
			_store.index = json;
			//emit event with index
			Actions.receiveIndex(json);
		});
		return _store
	}

	getBlogs(lang){
		var path = "";
		if(lang==='es') path = '/api/es/blogs/';
		else path = '/api/en/blogs/';
		Functions.fetchAdvanced(path).then((resp) => resp.json()).then((json) => {
			_store.blogs = json;
			Actions.receiveBlogs(json);
		});
		return _store
	}

	getBlog(slug){
		Functions.fetchAdvanced('/api/blog/' + slug + '/').then((resp) => resp.json()).then((json) => {
			_store.blog = json;
			Actions.receiveBlog(json);
		});
		return _store
	}

	getProjects(lang){
		var path = "";
		if(lang==='es') path = '/api/es/projects/';
		else path = '/api/en/projects/';
		Functions.fetchAdvanced(path).then((resp) => resp.json()).then((json) => {
			_store.projects = json;
			Actions.receiveProjects(json);
		});
		return _store
	}

	getProject(slug){
		Functions.fetchAdvanced('/api/project/' + slug + '/').then((resp) => resp.json()).then((json) => {
			_store.project = json;
			Actions.receiveProject(json);
		});
		return _store
	}

	getWritings(lang){
		var path = "";
		if(lang==='es') path = '/api/es/writings/';
		else path = '/api/en/writings/';
		Functions.fetchAdvanced(path).then((resp) => resp.json()).then((json) => {
			_store.writings = json;
			Actions.receiveWritings(json);
		});
		return _store
	}

	getWriting(slug){
		Functions.fetchAdvanced('/api/writing/' + slug + '/').then((resp) => resp.json()).then((json) => {
			_store.writing = json;
			Actions.receiveWriting(json);
		});
		return _store
	}

	reduce(state, action){
		switch(action.type){
			case ActionTypes.GET_INDEX:
				this.getIndex(action.lang)
				return _store.index

			case ActionTypes.RECEIVE_INDEX:
				_store.index = action.index
				_store.moto = action.index.moto
				return _store;

			case ActionTypes.GET_BLOGS:
				this.getBlogs(action.lang)
				return _store.blogs

			case ActionTypes.RECEIVE_BLOGS:
				_store.blogs = action.blogs.blogs
				_store.moto = action.blogs.moto
				return _store;

			case ActionTypes.GET_BLOG:
				this.getBlog(action.slug)
				return _store.blog

			case ActionTypes.RECEIVE_BLOG:
				_store.blog = action.blog
				return _store;

			case ActionTypes.GET_PROJECTS:
				this.getProjects(action.lang)
				return _store.projects

			case ActionTypes.RECEIVE_PROJECTS:
				_store.projects = action.projects.projects
				_store.moto = action.projects.moto
				return _store;

			case ActionTypes.GET_PROJECT:
				this.getProject(action.slug)
				return _store.project

			case ActionTypes.RECEIVE_PROJECT:
				_store.project = action.project
				return _store;

			case ActionTypes.GET_WRITINGS:
				this.getWritings(action.lang)
				return _store.writings

			case ActionTypes.RECEIVE_WRITINGS:
				_store.writings = action.writings.writings
				_store.moto = action.writings.moto
				return _store;

			case ActionTypes.GET_WRITING:
				this.getWriting(action.slug)
				return _store.writing

			case ActionTypes.RECEIVE_WRITING:
				_store.writing = action.writing
				return _store;

			default:
				return _store;

		}
	}

};

export default new WsStore();
