'use strict';

const React = require('react'),
			SomeWorksSingleItem = require('./someWorksSingleItem.js');

const SomeWorks = class SomeWorks extends React.Component {
	render() {
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
					<SomeWorksSingleItem />
					<li>
						<span className="title">nintendo</span>
						<span className="body">Modification of the Nintendo classNameic</span>
					</li>
					<li>
						<span className="title">Stock market</span>
						<span className="body">Autonomous invester algorithm</span>
					</li>
				</ul>
			</div>
		)
	}
};

module.exports = SomeWorks;
