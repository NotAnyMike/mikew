'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Router, {browserHistory, Link} from 'react-router-dom';

class Header extends React.Component {

	constructor(props){
		super(props)
		this.onBlogClickHandler = this.onBlogClickHandler.bind(this);
		this.onProjectsClickHandler = this.onProjectsClickHandler.bind(this);
		this.onWritingsClickHandler = this.onWritingsClickHandler.bind(this);
		this.onIdentifierClickHandler = this.onIdentifierClickHandler.bind(this);
		this.onLanguageClickHandler = this.onLanguageClickHandler.bind(this);
		this.onCvClickHandler = this.onCvClickHandler.bind(this);
	}

	static propTypes(){
		history: PropTypes.object.isRequired
	}

	onCvClickHandler() {
		console.log('2');
		window.open('/static/cv/cv_' + this.props.lang + '.pdf', '_blank');
	}

	onBlogClickHandler() {
		this.props.history.push('/' + this.props.lang + '/blogs/');
	}

	onProjectsClickHandler(){
		this.props.history.push('/' + this.props.lang + '/projects/');
	}

	onWritingsClickHandler(){
		this.props.history.push('/' + this.props.lang + '/writings/');
	}

	onIdentifierClickHandler(){
		this.props.history.push('/' + this.props.lang + '/');
	}

	onLanguageClickHandler(){
		//if pathname == / go to spansih
		//if writing, blog or project got to writings, blogs or projects
		var path = "";
		var newLanguage = (this.props.lang === 'es' ? 'en' : 'es');
		if(location.pathname === '/' || location.pathname === '') path = '/es/';
		else if(location.pathname.match('^\/((es)|(en))\/((project)|(writing)|(blog))\/')){
			if(location.pathname.match('^\/((es)|(en))\/project\/')) path = '/' + newLanguage + '/projects/';
			else if(location.pathname.match('^\/((es)|(en))\/blog\/')) path = '/' + newLanguage + '/blogs/';
			else path = '/' + newLanguage + '/writings/';
		}else{
			console.log(location.pathname.replace(/^\/((es)|(en))\//, '/' + newLanguage + '/'));
			path = location.pathname.replace(/^\/((es)|(en))\//, '/' + newLanguage + '/');
		}
		this.props.history.push(path);
	}

	render() {
		var language = "Español";

		var projects = "projects";
		var blog = "blog";
		var writings = "writings";

		if(this.props.lang === 'es') {
			language = "English";
			projects = "proyectos";
			blog = "blog";
			writings = "escritos";
		}

		return (	
			<header>
				 <div className="identifierContainer">
					<div className="identifier" onClick={this.onIdentifierClickHandler}>
						<div className="isotype"></div>
						<div className="logo"></div>
					</div>
					<div className="options">
						<span className="cv" onClick={this.onCvClickHandler}>c.v.</span>
						<span className="language" onClick={this.onLanguageClickHandler}>{language}</span>
					</div>
				 </div>
				 <ul>
					<li onClick={this.onBlogClickHandler}>{blog}</li>
					<li onClick={this.onProjectsClickHandler}>{projects}</li>
					<li onClick={this.onWritingsClickHandler}>{writings}</li>
				 </ul>
				 <div className="separator"></div>
			</header>
		)
	}
};

Header.propTypes = {
	lang: PropTypes.string.isRequired,
}

export default Header;
