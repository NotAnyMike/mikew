import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WritingSingleItem from './WritingSingleItem';

class WritingsDivContainer extends Component{
	
	render(){
		var list = [];
		if(Array.isArray(this.props.list)){
			this.props.list.map(element => {list.push(
				<WritingSingleItem 
					key={element.pk} 
					title={element.title} 
					small_sentence={element.small_sentence} 
					slug={element.slug}
				/>
			)});
		}
		return(
			<div className="mainContainer writingsContainer">
				<ul>
					{list}
				</ul>
			</div>
		);
	}

}

WritingsDivContainer.propTypes = {
	list: PropTypes.array,
}

export default WritingsDivContainer;
