import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import Footer from './Footer.js';
import IndexDivContainer from './IndexDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Index extends Component{

	constructor(props){
		super(props);
		this.goToWork = this.goToWork.bind(this);
	}

	componentWillMount() {
		Actions.getIndex(this.props.lang)
	};

	goToWork(slug){
		this.props.history.push('/' + this.props.lang + '/project/' + slug + '/');
	}

	render() {
		return (
			<div className="bodyContainer">
				<Header history={this.props.history} lang={this.props.lang}/>
				<IndexDivContainer 
					goToWorkFn={this.goToWork}
					someWorks={this.props.someWorks} 
					shortInfo={this.props.shortInfo}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

Index.propTypes = {
	index: PropTypes.string.isRequired,
}

export default Index;
