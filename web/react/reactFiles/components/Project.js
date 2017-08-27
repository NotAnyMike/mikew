import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import Footer from './footer.js';
import ProjectDivContainer from './ProjectDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Project extends Component{

	static propTypes(){
		//blogs: PropTypes.bool.isRequired
	}

	componentWillMount() {
		//Actions.getIndex()
	};

	render() {
		var className = "bodyContainer " + (this.props.blogs === true? " blogs" : " projects");
		return (
			<div className={className}>
				<Header history={this.props.history} />
				<ProjectDivContainer />
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

export default Project;
