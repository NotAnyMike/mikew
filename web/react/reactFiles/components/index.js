'use strict';

const React = require('react'),
			Header = require('./header.js'),
			Footer = require('./footer.js'),
			IndexContainer = require('./indexContainer.js');

var WsStore = require('../data/wsStore.js');

class Index extends React.Component{

	static componentWillMount() {
		//console.log(WsStore.getIndex())
	};

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

export default Index;
