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
import WritingContainer from './containers/WritingContainer';

ReactDOM.render(
	(
		<BrowserRouter history={browserHistory}>
			<div>
				<Route exact path="/" component={IndexContainer} />
				<Route exact path="/es/" component={IndexContainer} />
				<Route exact path="/en/" component={IndexContainer} />
				<Route exact path="/en/blogs/" component={BlogsContainer} />
				<Route exact path="/es/blogs/" component={BlogsContainer} />
				<Route exact path="/en/projects/" component={ProjectsContainer} />
				<Route exact path="/es/projects/" component={ProjectsContainer} />
				<Route exact path="/en/writings/" component={WritingsContainer} />	
				<Route exact path="/es/writings/" component={WritingsContainer} />	
				<Route exact path="/en/blog/:slug/" component={BlogContainer} />
				<Route exact path="/es/blog/:slug/" component={BlogContainer} />
				<Route exact path="/en/project/:slug/" component={ProjectContainer} />
				<Route exact path="/es/project/:slug/" component={ProjectContainer} />
				<Route exact path="/en/writing/:slug/" component={WritingContainer} />	
				<Route exact path="/es/writing/:slug/" component={WritingContainer} />	
			</div>
		</BrowserRouter>
	),document.getElementById('mainContainer')
);
