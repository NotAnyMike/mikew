import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header.js';
import Footer from './footer.js';
import WritingsDivContainer from './WritingsDivContainer.js';
import Actions from '../data/actions.js';

import WsStore from '../data/wsStore.js';

class Writings extends Component{

	constructor(props){
		super(props);

		this.goToEntry = this.goToEntry.bind(this)
	}

	componentWillMount() {
		Actions.getWritings(this.props.lang);
	};

	goToEntry(slug) {
		var path = '/' + this.props.lang + "/writing/" + slug + "/"
		this.props.history.push(path);
	}


	render() {
		var className = "bodyContainer writings";
		return (
			<div className={className}>
				<Header history={this.props.history} lang={this.props.lang}/>
				<WritingsDivContainer list={this.props.list} goToEntryFn={this.goToEntry}/>
				<Footer moto={this.props.moto}/>
			</div>
		)
	};
};

Writings.propTypes = {
}

export default Writings;
