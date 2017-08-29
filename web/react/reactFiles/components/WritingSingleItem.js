import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WritingSingleItem extends Component {

	render(){
		return (
			<li>
				<span className="title">{this.props.title}</span>
				<span className="body">{this.props.small_sentence}</span>
			</li>
		)
	}
}

WritingSingleItem.propTypes = {
	title: PropTypes.string,
	small_sentence: PropTypes.string,
	slug: PropTypes.string,
}

export default WritingSingleItem;
