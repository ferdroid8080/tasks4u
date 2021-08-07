import React from 'react';
import Layout from '../Layout';
import doorPerson from '../../images/door-person-1.svg';
import Button from '../Button';

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
				<div className="Login--form">
					<input type="text" placeholder='Ingresa tu llave de API aqui...' className='rounded' />
				</div>
				<div className="Login--action">
					<Button primary rounded>Accede con Trello</Button>
				</div>
			</div>
		</Layout>
	);
}

export default Login;
