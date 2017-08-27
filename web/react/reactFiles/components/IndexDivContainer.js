'use strict';

const React = require('react'),
			IndexMainInfo = require('./indexMainInfo.js'),
			SomeWorks = require('./someWorks.js');

class IndexDivContainer extends React.Component {
	render() {
		return (
			<div className="mainContainer indexContainer">
				<IndexMainInfo />
				<SomeWorks />
			</div>
		)
	}
};

module.exports = IndexDivContainer;
