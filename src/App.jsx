import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Shop from './routes/shop/shop';
import Auth from './routes/auth/auth';
import Cart from './routes/cart/cart';

import { checkUserSession } from './store/user/user.action';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

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
