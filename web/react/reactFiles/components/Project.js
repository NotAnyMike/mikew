import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import Footer from './footer.js';
import ProjectDivContainer from './ProjectDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Project extends Component{

	componentWillMount() {
		Actions.getProject(this.props.slug)
	};

	render() {
		var className = "bodyContainer project";
		return (
			<div className={className}>
				<Header history={this.props.history} />
				<ProjectDivContainer project={this.props.project}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};


Project.propTypes = {
	slug: PropTypes.string.isRequired,
	blog: PropTypes.object.isRequired,
}

export default Project;
