import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Onboarding} />
			<Route path='/auth' component={Login} />
			<Route path='*' render={() => <h1>Not Found</h1>} />
		</Switch>
	);
}

export default App;
