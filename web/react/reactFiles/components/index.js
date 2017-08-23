'use strict';

const React = require('react'),
			Header = require('./header.js'),
			Footer = require('./footer.js'),
			IndexContainer = require('./indexContainer.js');


var Index = class Index extends React.Component{

	render() {
		return (
			<div className="bodyContainer">
				<Header />
				<IndexContainer />
				<Footer />
			</div>
		)
	};
};
module.exports = Index; 
