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
	blog: {},
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
			blog: {}
		}
	}

	getIndex(){
		Functions.fetchAdvanced('/api/index/').then((resp) => resp.json()).then((json) => {
			_store.index = json;
			//emit event with index
			Actions.receiveIndex(json);
		});
		return _store
	}

	getBlogs(){
		Functions.fetchAdvanced('/api/blogs/').then((resp) => resp.json()).then((json) => {
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

	reduce(state, action){
		switch(action.type){
			case ActionTypes.GET_INDEX:
				this.getIndex()
				return _store.index

			case ActionTypes.RECEIVE_INDEX:
				_store.index = action.index
				_store.moto = action.index.moto
				return _store;

			case ActionTypes.GET_BLOGS:
				this.getBlogs()
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

			default:
				return _store;

		}
	}

};

export default new WsStore();
