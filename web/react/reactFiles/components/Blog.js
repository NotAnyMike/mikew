import React, {Component} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import BlogDivContainer from './BlogDivContainer.js';
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
				<BlogDivContainer/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

export default Blogs;
