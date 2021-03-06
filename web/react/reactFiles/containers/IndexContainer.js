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

	static calculateState(props) {
		var lang = location.pathname.match('^\/es\/') ? 'es' : 'en';
		return {
			index: WsStore.getState(lang).index,
		};
	}

	render() {
		var lang = this.props.location.pathname.match('^\/es\/') ? 'es' : 'en';

		var moto = {};
		var shortInfo = "";
		var someWorks = [];

		if(this.state.index){
			if(!(Object.keys(this.state.index).length === 0 && this.state.index.constructor === Object)){
				moto = this.state.index.moto;
				shortInfo = this.state.index.shortInfo.text;
				someWorks = this.state.index.someWorks;
			}
		}

		return <Index lang={lang} history={this.props.history} moto={moto} shortInfo={shortInfo} someWorks={someWorks} />;
	}
}

export default Container.create(IndexContainer);
