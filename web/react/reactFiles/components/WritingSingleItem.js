import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WritingSingleItem extends Component {

	constructor(props){
		super(props);
		
		this._clickHandler = this._clickHandler.bind(this);

	}

	_clickHandler(){
		this.props.goToEntryFn(this.props.slug);
	}

	render(){
		return (
			<li onClick={this._clickHandler}>
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
