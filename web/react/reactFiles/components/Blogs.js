import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import Footer from './footer.js';
import BlogsProjectsDivContainer from './BlogsProjectsDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Blogs extends Component{

	componentWillMount() {
		Actions.getBlogs()
	};

	render() {
		var className = "bodyContainer " + (this.props.isBlogs === true? " blogs" : " projects");
		return (
			<div className={className}>
				<Header history={this.props.history} />
				<BlogsProjectsDivContainer list={this.props.list} isBlogs={this.props.isBlogs}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

Blogs.propTypes = {
		isBlogs: PropTypes.bool.isRequired,
		list: PropTypes.array.isRequired,
}

export default Blogs;
