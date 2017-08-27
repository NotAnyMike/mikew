import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogProjectEntry extends Component{

	render(){
		return (
			<li>
				<figure className="identifierBlogList"><img src={this.props.img} alt=""></img></figure>
				<span className="bodyBlogList">{this.props.text}</span>
			</li>
		)
	}
}

BlogProjectEntry.propTypes = {
	img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	slug: PropTYpes.string.isRequired,
};

export default BlogProjectEntry;
