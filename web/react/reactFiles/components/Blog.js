import React, {Component} from 'react';
import Header from './header.js';
import Footer from './footer.js';
import BlogContainer from './BlogContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Blogs extends Component{

	componentWillMount() {
		//Actions.getIndex()
	};

	render() {
		return (
			<div className="bodyContainer">
				<Header history={this.props.history} />
				<BlogContainer/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

export default Blogs;
