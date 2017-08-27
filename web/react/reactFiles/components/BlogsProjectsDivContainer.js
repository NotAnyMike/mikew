import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlogProjectEntry from './BlogProjectEntry';

class BlogsProjectsDivContainer extends Component {

	render(){
		var className = "mainContainer " + (this.props.isBlogs ? "blogsContainer" : "projectsContainer");

		var list = [];
		if(this.props.list && Array.isArray(this.props.list)){
			this.props.list.map(element => {list.push(<BlogProjectEntry 
					img={element.img_header} 
					text={element.small_sentence} 
					key={element.pk} 
					slug={element.slug}
				/>)});
		}

		return (
			<div className={className}>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}

BlogsProjectsDivContainer.propTypes = {
	isBlogs: PropTypes.bool.isRequired,
}

export default BlogsProjectsDivContainer
