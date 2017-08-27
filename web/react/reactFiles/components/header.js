'use strict';

import React from 'react';
import Router, {browserHistory, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {

	constructor(props){
		super(props)
		this.onBlogClickHandler = this.onBlogClickHandler.bind(this);
		this.onProjectsClickHandler = this.onProjectsClickHandler.bind(this);
		this.onWritingsClickHandler = this.onWritingsClickHandler.bind(this);
	}

	static propTypes(){
		history: PropTypes.object.isRequired
	}

	onBlogClickHandler() {
		this.props.history.push('/blogs/');
	}

	onProjectsClickHandler(){
		this.props.history.push('/projects/');
	}

	onWritingsClickHandler(){
		this.props.history.push('/writings/');
	}

	render() {
		return (	
			<header>
				 <div className="identifierContainer">
					<div className="identifier">
						<div className="isotype"></div>
						<div className="logo"></div>
					</div>
					<div className="options">
						<span className="cv">c.v.</span>
						<span className="language">Español</span>
					</div>
				 </div>
				 <ul>
					<li onClick={this.onBlogClickHandler}>blog</li>
					<li onClick={this.onProjectsClickHandler}>projects</li>
					<li onClick={this.onWritingsClickHandler}>writings</li>
				 </ul>
			</header>
		)
	}
};

export default Header;
