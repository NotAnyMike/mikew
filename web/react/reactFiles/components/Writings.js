import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import Footer from './footer.js';
import WritingsDivContainer from './WritingsDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Writings extends Component{

	componentWillMount() {
		Actions.getWritings()
	};

	render() {
		var className = "bodyContainer writings";
		return (
			<div className={className}>
				<Header history={this.props.history} />
				<WritingsDivContainer list={this.props.list}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

Writings.propTypes = {
}

export default Writings;
