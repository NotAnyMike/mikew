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
				<div>
					<span className="bodyBlogList">{this.props.text}</span>
					<span className="summaryBlogList">
						Lorem eum minus quae necessitatibus exercitationem! Tempora perferendis adipisci sequi soluta quis? Perspiciatis modi fugiat culpa explicabo suscipit.
					</span>
				</div>
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
