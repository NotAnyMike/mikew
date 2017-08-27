import React, {Component} from 'react';
import Header from './header.js';
import Footer from './footer.js';
import IndexContainer from './indexContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Index extends Component{

	componentWillMount() {
		Actions.getIndex()
	};

	render() {
		return (
			<div className="bodyContainer">
				<Header />
				<IndexContainer shortInfo={this.props.shortInfo}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

export default Index;
