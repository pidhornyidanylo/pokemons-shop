import React, { useState } from 'react'

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, auth } from '../../utils/firebase.utils';

import './sign-in.style.css';

const defaultState = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [ user, setUser ] = useState(defaultState);
  const { email, password } = user;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // console.log(auth)
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({...user, [name]: value});
  }

  const resetFormFields = () => {
    setUser(defaultState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUserWithEmailAndPassword();
  }

  const signInUserWithEmailAndPassword = async () => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error)
    } 
  }
  
  

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} >
        <input onChange={(e) => handleInput(e)} name='email' value={email} type="email" placeholder='Email' />
        <input onChange={(e) => handleInput(e)} name='password' value={password} type='password' placeholder='Password'/>
        <div className='button-container'>
          <button type='submit'>Sign In</button>
          <button type='button' onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
      </form>      
    </div>
  )
}

export default SignInForm
