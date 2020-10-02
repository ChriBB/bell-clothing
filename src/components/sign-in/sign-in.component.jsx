import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

// imports needed when using CSS in JS
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';

//=================================================
// needed when using SCSS styling method
// + sign-in.styles.scss file
//=================================================

// import './sign-in.styles.scss';

// class SignIn extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             email: '',
//             password: ''
//         };
//     }

//     handleSubmit = async event => {
//         event.preventDefault();

//         const { email, password } = this.state;
        
//         try {
//             await auth.signInWithEmailAndPassword(email, password);

//             this.setState({ email: '', password: '' });
//         } catch(error) {
//             console.log(error);
//         }
//     };

//     handleChange = event => {
//         const { value, name } = event.target;

//         this.setState({ [name]: value});
//     };

//     render() {
//         return(
//             <div className='sign-in'>
//                 <h2>I already have an account</h2>
//                 <span>Sign in with your email and password</span>

//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput 
//                     name='email' 
//                     type='email' 
//                     handleChange={this.handleChange} 
//                     value={this.state.email} 
//                     label='email'
//                     required
//                     />
//                     <FormInput 
//                     name='password' 
//                     type='password' 
//                     value={this.state.password}
//                     handleChange={this.handleChange} 
//                     label='password'
//                     required
//                     />
//                     <div className='buttons'>
//                     <CustomButton type='submit'> Sign in </CustomButton>
//                     <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
//                     Sign in with Google
//                     </CustomButton>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
//=================================================

//=================================================
// needed using CSS in JS styling method +
// menu-item.styles.jsx file
//=================================================
class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { email, password } = this.state;
  
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      } catch (error) {
        console.log(error);
      }
    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      return (
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </ButtonsBarContainer>
          </form>
        </SignInContainer>
      );
    }
  }

export default SignIn;