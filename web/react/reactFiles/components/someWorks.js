'use strict';

const React = require('react'),
			SomeWorksSingleItem = require('./someWorksSingleItem.js');

import PropTypes from 'prop-types';

const SomeWorks = class SomeWorks extends React.Component {
	render() {
		var list = [];
		if(Array.isArray(this.props.list)){
			this.props.list.map(element => {list.push(
				<SomeWorksSingleItem 
					key={element.pk} 
					title={element.title} 
					body={element.small_sentence} 
					slug={element.slug}
					goToWorkFn={this.props.goToWorkFn}
				/>
			)}, this);
		}
		return (
			<div className="someWorks">
				<div className="titleContainer">
					<div className="line"></div>
					<span className="title">some works</span>
					<div className="line"></div>
				</div>
				<ul>
					<div className="left"></div>
					<div className="right"></div>
					{list}
				</ul>
			</div>
		)
	}
};

SomeWorks.propTypes = {
	goToWorkFn: PropTypes.func.isRequired,
}

module.exports = SomeWorks;
