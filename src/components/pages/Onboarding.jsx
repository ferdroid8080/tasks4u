import React from 'react';
import chore1 from '../../images/chores-1.svg';
import Button from '../Button';
import Layout from '../Layout';

function Onboarding() {
	let isLoggedIn = localStorage.getItem('trello_token') !== null;

	return (
		<Layout>
			<div className="Onboarding">
				<div className="Onboarding--inner">
					<div className='image--onboarding'>
						<img src={chore1} alt='Onboarding' />
					</div>
					<div className='Onboarding--HeaderTitle'>
						<h2 className='text-center'>Organiza tu dia</h2>
						<p className='text-center'>Ahora es facil llevar tu dia a dia con efectividad</p>
					</div>
				</div>
				<div className="Onboarding--action">
					<Button link to={isLoggedIn ? '/boards' : '/auth'} primary rounded>Comenzar</Button>
				</div>
			</div>
		</Layout>
	);
}

export default Onboarding;
