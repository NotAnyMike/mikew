import React, {Component} from 'react';
import {Container} from 'flux/utils';
import PropTypes from 'prop-types';
import Blogs from '../components/Blogs.js';
import WsStore from '../data/wsStore.js';

class ProjectsContainer extends Component {

	static getStores() {
		return [
			WsStore,
		];
	}

	static calculateState() {
		return {
			moto: WsStore.getState().moto,
			projects: WsStore.getState().projects,
		};
	}

	render() {
		var isBlogs = false;

		return <Blogs 
			history={this.props.history} 
			moto={this.state.moto} 
			list={this.state.projects} 
			isBlogs={isBlogs} />;
	}
}

ProjectsContainer.propTypes = {
}

export default Container.create(ProjectsContainer);
