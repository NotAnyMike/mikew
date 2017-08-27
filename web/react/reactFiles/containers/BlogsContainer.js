import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Blogs from '../components/Blogs.js';
import WsStore from '../data/wsStore.js';

class BlogsContainer extends Component {

	static getStores() {
		return [
			WsStore,
		];
	}

	static calculateState() {
		return {
			moto: WsStore.getState().moto,
			index: WsStore.getState().index,
			blogs: WsStore.getState().blogs,
		};
	}

	render() {
		return <Blogs history={this.props.history} moto={this.state.moto} list={this.state.blogs} isBlogs={true} />;
	}
}

export default Container.create(BlogsContainer);
