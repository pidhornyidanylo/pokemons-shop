import React from 'react'

import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from '../../utils/firebase.utils';

import './sign-up.style.css';
import { useState } from 'react';

const defaultState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {

  const [ user, setUser ] = useState(defaultState);

  const { 
    displayName,
    email,
    password,
    confirmPassword
   } = user;

   const resetFormFields = () => {
    setUser(defaultState);
  }

   const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({...user, [name]: value})
    console.log(user);
   }

   const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert('Passwords do not match');
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  
   }


  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your emain and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={e => handleChange(e)} name='displayName' value={displayName} type="text" placeholder='Username' />
        <input onChange={e => handleChange(e)} name='email' value={email} type="email" placeholder='Email' />
        <input onChange={e => handleChange(e)} name='password' value={password} type="password" placeholder='Password'/>
        <input onChange={e => handleChange(e)} name='confirmPassword' value={confirmPassword} type="password" placeholder='Confirm password' />
        <button className='sign-up-btn' type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
