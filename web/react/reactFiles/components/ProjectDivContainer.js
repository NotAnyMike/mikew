import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Technologies from './Technologies';

class ProjectDivContainer extends Component {
	
	render(){
		var body = "";
		var title = "";
		var summary = "";
		var img = "";
		var techs = [];

		if(this.props.project){
			body = this.props.project.body;
			title = this.props.project.title;
			summary = this.props.project.summary;
			img = this.props.project.img_header;
			techs = this.props.project.technologies;
		}

		return (
			<div className="mainContainer projectContainer">
				<figure className="identifierEntry"><img src={img} alt={title}></img></figure>
				<span className="title">{title}</span>
				<span className="summary" dangerouslySetInnerHTML={{__html: summary}}></span>
				<Technologies technologies={techs}/>
				<div className="content" dangerouslySetInnerHTML={{__html: body}}></div>
			</div>
		)
	}

}

export default ProjectDivContainer;
