import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory} from 'react-router';
import {Route, BrowserRouter} from 'react-router-dom';

//var Index = require('./components/index.js');
import IndexContainer from './containers/IndexContainer.js';
import BlogsContainer from './containers/BlogsContainer';
import BlogContainer from './containers/BlogContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import ProjectContainer from './containers/ProjectContainer';
import WritingsContainer from './containers/WritingsContainer';
import Writing from './components/Writing';

ReactDOM.render(
	(
		<BrowserRouter history={browserHistory}>
			<div>
				<Route exact path="/" component={IndexContainer} />
				<Route exact path="/blogs/" component={BlogsContainer} />
				<Route exact path="/projects/" component={ProjectsContainer} />
				<Route exact path="/writings/" component={WritingsContainer} />	
				<Route exact path="/blog/:slug/" component={BlogContainer} />
				<Route exact path="/project/:slug/" component={ProjectContainer} />
				<Route exact path="/writing/:slug/" component={Writing} />	
			</div>
		</BrowserRouter>
	),document.getElementById('mainContainer')
);
