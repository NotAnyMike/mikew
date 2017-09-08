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
		var styles = "";
		if(this.props.project){
			styles = ".important {background-color: #" +  this.props.project.background_color + " !important; color: #" + this.props.project.color + " !important} .important > h2 {color: #" + this.props.project.title_color + " !important}"
		}
		return (
			<div className={className}>
				<style dangerouslySetInnerHTML={{__html: styles}}/>
				<Header history={this.props.history} lang={this.props.lang}/>
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
