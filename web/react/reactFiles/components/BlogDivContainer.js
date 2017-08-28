import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogDivContainer extends Component{
	render(){

		var img = this.props.blog ? this.props.blog.img_header : "";
		var title = this.props.blog ? this.props.blog.title : "loading...";
		var body = this.props.blog ? this.props.blog.body : "loading...";

		return (
			<div className="mainContainer blogContainer">
				<figure className="identifierEntry"><img src={img} alt={title}></img></figure>
				<span className="title">{title}</span>
				<div className="content" dangerouslySetInnerHTML={{__html: body}}>
				</div>
			</div>
		)
	}
}

BlogDivContainer.propTypes = {
	blog: PropTypes.object.isRequired,
};

export default BlogDivContainer
