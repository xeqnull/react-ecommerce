import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './authentication.styles.scss';

const Authentication = () => (
	<div className='authentication'>
		<div className='sign-in'>
			<SignIn />
		</div>
		<div className='sign-up'>
			<SignUp />
		</div>
	</div>
);

export default Authentication;
