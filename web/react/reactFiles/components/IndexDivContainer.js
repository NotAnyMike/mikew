'use strict';

const React = require('react'),
			IndexMainInfo = require('./indexMainInfo.js'),
			SomeWorks = require('./someWorks.js');

import PropTypes from 'prop-types';

class IndexDivContainer extends React.Component {

	render() {
		return (
			<div className="mainContainer indexContainer">
				<IndexMainInfo body={this.props.shortInfo}/>
				<div className="separator"></div>
				<SomeWorks list={this.props.someWorks} goToWorkFn={this.props.goToWorkFn}/>
			</div>
		)
	}
};

IndexDivContainer.propTypes = {
	goToWorkFn: PropTypes.func.isRequired,
	someWorks: PropTypes.array,
	shortInfo: PropTypes.string,
};

module.exports = IndexDivContainer;
