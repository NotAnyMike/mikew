'use strict';

const React = require('react'),
			Header = require('./header.js'),
			Footer = require('./footer.js'),
			IndexContainer = require('./indexContainer.js');

var WsStore = require('../data/wsStore.js');

var Index = class Index extends React.Component{

	static componentWillMount() {
		console.log(WsStore.getIndex())
	};

	render() {
		console.log(WsStore.getIndex())
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
