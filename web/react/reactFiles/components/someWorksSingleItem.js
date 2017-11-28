'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class SomeWorksSingleItem extends React.Component {
	
	constructor(props){
		super(props)
		this.goToWork = this.goToWork.bind(this);
	}

	goToWork(){
		this.props.goToWorkFn(this.props.slug);
	}

	render() {
		return (
			<li onClick={this.goToWork}>
				<figure><img src="/static/img/agv.png" alt="" /></figure>
				<div>
					<span className="title">{this.props.title}</span>
					<span className="body">Sentiment analysis for some politician</span>
				</div>
			</li>
		)
	};
};

SomeWorksSingleItem.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	goToWorkFn: PropTypes.func.isRequired,
};

module.exports = SomeWorksSingleItem;
