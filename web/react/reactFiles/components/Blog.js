import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import Footer from './Footer.js';
import BlogDivContainer from './BlogDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Blog extends Component{

	componentWillMount() {
		Actions.getBlog(this.props.slug)
	};

	render() {
		return (
			<div className="bodyContainer blog">
				<Header history={this.props.history} lang={this.props.lang}/>
				<BlogDivContainer blog={this.props.blog}/>
				<Footer/>
			</div>
		)
	}; };

Blog.propTypes = {
	slug: PropTypes.string.isRequired,
	blog: PropTypes.object.isRequired,
};

export default Blog;
