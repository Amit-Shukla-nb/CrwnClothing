import React, { Component } from 'react'
import  './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: '',
         password: ''
      }
    }

    handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
    };
    
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
    };

  render() {
    return (
      <div className="sign-in">
          <h2>I already have a account</h2>
          <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='Email' required />
          {/* <label>Email</label> */}
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='Password' required />
          {/* <label>Password</label> */}
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;