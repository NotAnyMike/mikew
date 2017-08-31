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
		var lang = this.props.location.pathname.match('^\/es\/') ? 'es' : 'en';

		var isBlogs = false;

		return <Blogs 
			history={this.props.history} 
			moto={this.state.moto} 
			list={this.state.projects} 
			isBlogs={isBlogs} 
			lang={lang}
			/>;
	}
}

ProjectsContainer.propTypes = {
}

export default Container.create(ProjectsContainer);
