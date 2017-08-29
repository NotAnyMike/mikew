import React, {Component} from 'react';
import {Container} from 'flux/utils';
import PropTypes from 'prop-types';
import Writings from '../components/Writings.js';
import WsStore from '../data/wsStore.js';

class WritingsContainer extends Component {

	static getStores() {
		return [
			WsStore,
		];
	}

	static calculateState() {
		return {
			moto: WsStore.getState().moto,
			writings: WsStore.getState().writings,
		};
	}

	render() {
		return <Writings
				history={this.props.history} 
				moto={this.state.moto} 
				list={this.state.writings} 
			/>;
	}
}

WritingsContainer.propTypes = {
}

export default Container.create(WritingsContainer);
