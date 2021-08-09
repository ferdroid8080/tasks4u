import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Boards from './Pages/Boards';
import Lists from './Pages/Lists';
import Login from './Pages/Login';
import Onboarding from './Pages/Onboarding';

function App() {
	let isLoggedIn = localStorage.getItem('trello_token') !== null;

	return (
		<Switch>
			<Route exact path='/onboarding' component={Onboarding} />
			<Route path='/auth' component={Login} />
			<Route exact path='/boards/:id/lists' component={Lists} />
			<Route path='/boards' component={Boards} />
			<Redirect from='/' to={isLoggedIn ? '/boards' : '/onboarding'} />
			<Route path='*' render={() => <h1>Not Found</h1>} />
		</Switch>
	);
}

export default App;
