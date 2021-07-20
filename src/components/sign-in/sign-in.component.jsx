import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../submit-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = evt => {
        evt.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleInput = evt => {
        const { value, name } = evt.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>Already have an account ?</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label='Email'
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    onChange={this.handleInput} 
                    required />
                    <FormInput 
                    label='Password'
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    onChange={this.handleInput} 
                    required />
                    <CustomButton type='submit' value='Submit'>Sign In</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignIn;