import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import Footer from './footer.js';
import WritingDivContainer from './WritingDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Writing extends Component{

	componentWillMount() {
		Actions.getWriting(this.props.slug)
	};

	render() {
		var className = "bodyContainer writing";
		
		var title = "";
		var body = "";

		if(this.props.writing){	
			if(!(Object.keys(this.props.writing).length === 0 && this.props.writing.constructor === Object)){
				title = this.props.writing.title;
				body = this.props.writing.body;
			}
		}
		return (
			<div className={className}>
				<Header history={this.props.history} />
				<WritingDivContainer title={title} body={body}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

Writing.propTypes = {
	writing: PropTypes.object,
}

export default Writing;
