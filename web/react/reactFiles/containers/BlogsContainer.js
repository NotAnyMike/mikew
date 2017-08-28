import React, {Component} from 'react';
import {Container} from 'flux/utils';
import PropTypes from 'prop-types';
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
			blogs: WsStore.getState().blogs,
		};
	}

	render() {
		var isBlogs = this.props.location.pathname.indexOf("blogs") == -1 ? false : true;

		return <Blogs 
			history={this.props.history} 
			moto={this.state.moto} 
			list={this.state.blogs} 
			isBlogs={isBlogs} />;
	}
}

BlogsContainer.propTypes = {
}

export default Container.create(BlogsContainer);
