'use strict';

const React = require('react'),
			IndexMainInfo = require('./indexMainInfo.js'),
			SomeWorks = require('./someWorks.js');

const IndexContainer = class IndexContainer extends React.Component {
	render() {
		return (
			<div className="mainContainer indexContainer">
				<IndexMainInfo />
				<SomeWorks />
			</div>
		)
	}
};

module.exports = IndexContainer;
