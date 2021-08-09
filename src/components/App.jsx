import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Boards from './pages/Boards';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';

function App() {
	let isLoggedIn = localStorage.getItem('trello_token') !== null;

	return (
		<Switch>
			<Route exact path='/onboarding' component={Onboarding} />
			<Route path='/auth' component={Login} />
			<Route path='/boards' component={Boards} />
			<Redirect from='/' to={isLoggedIn ? '/boards' : '/onboarding'} />
			<Route path='*' render={() => <h1>Not Found</h1>} />
		</Switch>
	);
}

export default App;
