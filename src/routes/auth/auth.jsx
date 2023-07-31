import React from 'react'

import SignInForm from '../../components/signInForm/sign-in.component';
import SignUpForm from '../../components/signUpForm/sign-up.component';

import './auth.style.css';

const Auth = () => {
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Auth
