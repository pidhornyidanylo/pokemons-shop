import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import { onAuthStateChangedListener, 
      createUserDocumentFromAuth} from './utils/firebase.utils';

import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Shop from './routes/shop/shop';
import Auth from './routes/auth/auth';
import Cart from './routes/cart/cart';

import { setUserAction } from './store/user/user.action';

import './App.css';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setUserAction(user));
    })
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='auth' element={<Auth />} />
        <Route path='cart' element={<Cart />}/>
      </Route>
    </Routes>
  )
}

export default App
