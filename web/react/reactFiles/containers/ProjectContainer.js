import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Project from '../components/Project.js';
import WsStore from '../data/wsStore.js';

class ProjectContainer extends Component {

	static getStores() {
		return [
			WsStore,
		];
	}

	static calculateState() {
		return {
			project: WsStore.getState().project,
		};
	}

	render() {
		debugger
		return <Project history={this.props.history} project={this.state.project} slug={this.props.match.params.slug}/>;
	}
}

export default Container.create(ProjectContainer);
