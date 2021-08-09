import React from 'react';
import Layout from '../Layout';
import doorPerson from '../../images/door-person-1.svg';
import TrelloClient, { Trello } from 'react-trello-client';

function Login() {
	return (
		<Layout>
			<div className="Login">
				<div className="Login--inner">
					<div className="Login--Image">
						<img src={doorPerson} alt="Login" />
					</div>
					<div className="Login--HeaderTitle">
						<h2 className="text-center">Accede ahora</h2>
						<p className="text-center">
							Para poder acceder a sus tareas, debe
							proporcionar una llave de Trello haciendo click aqui.
						</p>
					</div>
				</div>
				<div className="Login--action">
					<TrelloClient 
						apiKey={process.env.REACT_APP_TRELLO_API_KEY}
						clientVersion={1}
						apiEndpoint="https://api.trello.com"
						authEndpoint="https://trello.com"
						intentEndpoint="https://trello.com"
						authorizeName="Tasks4u"
						authorizeType="popup"
						authorizePersist={true}
						authorizeInteractive={true}
						authorizeScopeRead={false}
						authorizeScopeWrite={true}
						authorizeScopeAccount={true}
						authorizeExpiration="never"
						authorizeOnSuccess={() => {
							sessionStorage.setItem('trelloToken', Trello.token());
							// redirect to Boards page
						}}
						authorizeOnError={() => console.log("Login error!")}
						autoAuthorize={false}
						authorizeButton={true}
						buttonStyle="flat"
						buttonColor="green"
						buttonText="Accede con Trello"
					/>
				</div>
			</div>
		</Layout>
	);
}

export default Login;
