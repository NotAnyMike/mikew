import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlogProjectEntry from './BlogProjectEntry';

class BlogsProjectsDivContainer extends Component {

	static propTypes() {
		isBlogs: PropTypes.bool.isRequired
	}

	render(){
		return (
			<div className="mainContainer blogsContainer">
				<ul>
					<BlogProjectEntry />
					<li>
						<figure className="identifierBlogList"><img src="/static/img/apple.png" alt=""></img></figure>
						<span className="bodyBlogList">Making the terminal look cool</span>
					</li>
					<li>
						<figure className="identifierBlogList"><img src="/static/img/css.png" alt=""></img></figure>
						<span className="bodyBlogList">Use css to make a custom check button</span>
					</li>
					<li>
						<figure className="identifierBlogList"><img src="/static/img/flux.png" alt=""></img></figure>
						<span className="bodyBlogList">Use firebase to have a very optimized chanel</span>
					</li>
				</ul>
			</div>
		)
	}
}

export default BlogsProjectsDivContainer
