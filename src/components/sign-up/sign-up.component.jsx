import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../submit-button/custom-button.component';
import './sign-up.styles.scss';

class SignUp extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.setState({ displayName: '', email: '', password: '' });
    }

    handleInput = evt => {
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-up'>
                <h2>Don't have an account ?</h2>
                <span>Sign up with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    label='Display Name'
                    name='display-name'
                    value={this.state.displayName}
                    onChange={this.handleInput}
                    required />
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
                    <CustomButton type='submit' value='Submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
        
    }
}

export default SignUp;