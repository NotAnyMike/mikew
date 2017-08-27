import React, {Component} from 'react';

class WritingsDivContainer extends Component{
	
	render(){
		return(
			<div className="mainContainer writingsContainer">
				<ul>
					<li>
						<span className="title">an approach to social relationships</span>
						<span className="body">Why is there a need to choose?</span>
					</li>
					<li>
						<span className="title">A cover called skin</span>
						<span className="body">What do we really hide?</span>
					</li>
					<li>
						<span className="title">social dependency</span>
						<span className="body">Should we be really independent</span>
					</li>
					<li>
						<span className="title">notes on her and herself</span>
						<span className="body">Do I love her</span>
					</li>
				</ul>
			</div>
		);
	}

}

export default WritingsDivContainer;
