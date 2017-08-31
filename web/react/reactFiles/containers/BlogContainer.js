import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Blog from '../components/Blog.js';
import WsStore from '../data/wsStore.js';

class BlogContainer extends Component {

	static getStores() {
		return [
			WsStore,
		];
	}

	static calculateState() {
		return {
			blog: WsStore.getState().blog,
		};
	}

	render() {
		var lang = this.props.location.pathname.match('^\/es\/') ? 'es' : 'en';

		return <Blog lang={lang} history={this.props.history} blog={this.state.blog} slug={this.props.match.params.slug}/>;
	}
}

export default Container.create(BlogContainer);
