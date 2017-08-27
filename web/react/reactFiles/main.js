'use strict';

var React = require('react'),
		ReactDOM = require('react-dom');

var Route = require('react-router').Route;
var BrowserRouter = require('react-router-dom').BrowserRouter;
var browserHistory = require('react-router').browserHistory;

//var Index = require('./components/index.js');
import IndexContainer from './containers/IndexContainer.js';

ReactDOM.render(
	/*(
		<BrowserRouter history={browserHistory}>
			<div>
				<Route path="/" component={Index} />
			</div>
		</BrowserRouter>
	)*/<IndexContainer />,document.getElementById('mainContainer')
);
