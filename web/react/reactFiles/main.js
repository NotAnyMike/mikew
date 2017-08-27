import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory} from 'react-router';
import {Route, BrowserRouter} from 'react-router-dom';

//var Index = require('./components/index.js');
import IndexContainer from './containers/IndexContainer.js';
import BlogsContainer from './containers/BlogsContainer';
import Blog from './components/Blog';
import Project from './components/Project';
import Writings from './components/Writings';
import Writing from './components/Writing';

ReactDOM.render(
	(
		<BrowserRouter history={browserHistory}>
			<div>
				<Route exact path="/" component={IndexContainer} />
				<Route exact path="/blogs/" blogs={true} component={BlogsContainer} />
				<Route exact path="/projects/" blogs={false} component={BlogsContainer} />
				<Route exact path="/writings/" component={Writings} />	
				<Route exact path="/blog/:slug/" component={Blog} />
				<Route exact path="/project/:slug/" component={Project} />
				<Route exact path="/writing/:slug/" component={Writing} />	
			</div>
		</BrowserRouter>
	),document.getElementById('mainContainer')
);
