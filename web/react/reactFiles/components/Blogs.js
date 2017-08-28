import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import Footer from './footer.js';
import BlogsProjectsDivContainer from './BlogsProjectsDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Blogs extends Component{

	constructor(props) {
		super(props)
		this.goToEntry = this.goToEntry.bind(this);
	}

	componentWillMount() {
		if(this.props.isBlogs === true) Actions.getBlogs();
		else Actions.getProjects();
	};

	goToEntry(slug) {
		var path = (this.props.isBlogs ? "/blog/" : "/project/") + slug + "/"
		this.props.history.push(path);
	}

	render() {
		var className = "bodyContainer " + (this.props.isBlogs === true? "blogs" : "projects");
		return (
			<div className={className}>
				<Header history={this.props.history} />
				<BlogsProjectsDivContainer list={this.props.list} isBlogs={this.props.isBlogs} goToEntryFn={this.goToEntry}/>
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
