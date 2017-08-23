'use strict';

const React = require('react');
const PropTypes = require('prop-types');

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

SomeWorksSingleItem.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

module.exports = SomeWorksSingleItem;
