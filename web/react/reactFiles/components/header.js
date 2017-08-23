'use strict';

const React = require('react');

const header = class Header extends React.Component {
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
					<li>blog</li>
					<li>projects</li>
					<li>writings</li>
				 </ul>
			</header>
		)
	}
};

module.exports = header;
