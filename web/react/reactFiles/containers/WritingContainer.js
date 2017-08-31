import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Writing from '../components/Writing.js';
import WsStore from '../data/wsStore.js';

class WritingContainer extends Component {

	static getStores() {
		return [
			WsStore,
		];
	}

	static calculateState() {
		return {
			writing: WsStore.getState().writing,
		};
	}

	render() {
		var lang = this.props.location.pathname.match('^\/es\/') ? 'es' : 'en';

		return <Writing lang={lang} history={this.props.history} writing={this.state.writing} slug={this.props.match.params.slug}/>;
	}
}

export default Container.create(WritingContainer);
