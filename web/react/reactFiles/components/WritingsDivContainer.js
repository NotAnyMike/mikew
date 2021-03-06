import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WritingSingleItem from './WritingSingleItem';
import BlogProjectEntry from './BlogProjectEntry';

class WritingsDivContainer extends Component{
	
	render(){
		var list = [];
		if(Array.isArray(this.props.list)){
			/*this.props.list.map(element => {list.push(
				<WritingSingleItem 
					key={element.pk} 
					title={element.title} 
					small_sentence={element.small_sentence} 
					slug={element.slug}
					goToEntryFn={this.props.goToEntryFn}
				/>
			)}, this);*/
			this.props.list.map(element => {list.push(<BlogProjectEntry 
					key={element.pk} 
					img={element.img_header} 
					text={element.title}
					//summary={element.small_sentence} 
					slug={element.slug}
					goToEntryFn={this.props.goToEntryFn}
				/>)}, this);
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
	goToEntryFn: PropTypes.func,
}

export default WritingsDivContainer;
