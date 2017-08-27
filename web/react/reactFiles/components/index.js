import React, {Component} from 'react';
import Header from './header.js';
import Footer from './footer.js';
import IndexContainer from './indexContainer.js';

import WsStore from '../data/wsStore.js';

class Index extends Component{

	static componentWillMount() {
		//console.log(WsStore.getIndex())
	};

	render() {
		return (
			<div className="bodyContainer">
				<Header />
				<IndexContainer />
				<Footer />
			</div>
		)
	};
};

export default Index;
