'use strict';

const React = require('react'),
			SomeWorksSingleItem = require('./someWorksSingleItem.js');

const SomeWorks = class SomeWorks extends React.Component {
	render() {
		var list = [];
		if(Array.isArray(this.props.list)){
			this.props.list.map(element => {list.push(
				<SomeWorksSingleItem key={element.pk} title={element.title} body={element.small_sentence} />
			)});
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

module.exports = SomeWorks;
