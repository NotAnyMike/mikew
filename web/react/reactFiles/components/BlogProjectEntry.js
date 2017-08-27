import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogProjectEntry extends Component{

	constructor(props){
		super(props);

		this._clickHandler = this._clickHandler.bind(this);
	}

	_clickHandler() {
		this.props.goToEntryFn(this.props.slug)
	}

	render(){
		return (
			<li onClick={this._clickHandler}>
				<figure className="identifierBlogList"><img src={this.props.img} alt=""></img></figure>
				<span className="bodyBlogList">{this.props.text}</span>
			</li>
		)
	}
}

BlogProjectEntry.propTypes = {
	img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	goToEntryFn: PropTypes.func.isRequired,
};

export default BlogProjectEntry;
