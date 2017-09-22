'use strict';

const React = require('react');
import PropTypes from 'prop-types';

const IndexMainInfo = class IndexMainInfo extends React.Component {

	render() {
		return (
			<div className="mainInfo">
				<figure></figure>
				<div className="separator"></div>
				<span>
					<p dangerouslySetInnerHTML={{__html: this.props.body}}></p>
				</span>
			</div>
		)
	}
};

IndexMainInfo.propTypes = {
	body: PropTypes.string,
}

module.exports = IndexMainInfo;
