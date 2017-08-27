import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Index from '../components/index.js';
import WsStore from '../data/wsStore.js';

class IndexContainer extends Component {

	static getStores() {
		return [
			WsStore,
		];
	}

	static calculateState() {
		return {
			index: WsStore.getState(),
		};
	}

	render() {
		console.log(this.state)
		return <Index {...this.state.index} />;
	}
}

export default Container.create(IndexContainer);
