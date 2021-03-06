import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainApp from './components/MainApp.jsx';
// import '../styles/course.css';
// import '../../styles/course.css';

ReactDOM.render(
	<Router>
		<React.Fragment>
			<Switch>
				<Route path='/' component={MainApp}/>
			</Switch>
		</React.Fragment>
	</Router>,
	document.getElementById("app")
	)