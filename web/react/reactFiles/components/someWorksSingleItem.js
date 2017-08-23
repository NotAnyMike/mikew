'use strict';

//const React = require('react');
import React from 'react';

class SomeWorksSingleItem extends React.Component {
	
	render() {
		return (
			<li>
				<span className="title">{this.props.title}</span>
				<span className="body">Sentiment analysis for some politician</span>
			</li>
		)
	};
};

SomeWorksSingleItem.propTypes = {};

module.exports = SomeWorksSingleItem;
