import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleInput = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSocialLogin = async () => {
		signInWithGoogle();
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h2>Already have an account ?</h2>
				<span>Sign in with your email and password.</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='Email'
						name='email'
						type='email'
						value={email}
						onChange={this.handleInput}
						required
					/>
					<FormInput
						label='Password'
						name='password'
						type='password'
						value={password}
						onChange={this.handleInput}
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit' value='Submit'>
							Sign In
						</CustomButton>
						<CustomButton isGoogleSignIn onClick={this.handleSocialLogin}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
