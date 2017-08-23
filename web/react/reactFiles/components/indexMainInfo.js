'use strict';

const React = require('react');

const IndexMainInfo = class IndexMainInfo extends React.Component {
	render() {
		return (
			<div className="mainInfo">
				<figure></figure>
				<div className="separator"></div>
				<span>I’m Mike Woodcock, an Economist, student of matematics and empirical engineer. Currently working on Artificial Intelligence, Simulation and Distributed Applications.<br></br>
				Always open to new an interesting projects.</span>
			</div>
		)
	}
};

module.exports = IndexMainInfo;
