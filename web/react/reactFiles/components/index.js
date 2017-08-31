import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import Footer from './Footer.js';
import IndexDivContainer from './IndexDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Index extends Component{

	componentWillMount() {
		Actions.getIndex(this.props.lang)
	};

	render() {
		return (
			<div className="bodyContainer">
				<Header history={this.props.history} lang={this.props.lang}/>
				<IndexDivContainer someWorks={this.props.someWorks} shortInfo={this.props.shortInfo}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

Index.propTypes = {
	index: PropTypes.string.isRequired,
}

export default Index;
