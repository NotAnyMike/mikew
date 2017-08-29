import React, {Component} from 'react';

class WritingContainerDiv extends Component {
	render(){

		return(
			<div className="mainContainer writingContainer">
				<span className="title">{this.props.title}</span>
				<div className="content" dangerouslySetInnerHTML={{__html: this.props.body}}>
				</div>
			</div>
		)
	}
}

export default WritingContainerDiv;
