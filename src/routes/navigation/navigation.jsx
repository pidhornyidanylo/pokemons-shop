import React, { useContext, useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selctor'

import { signOutUser } from '../../utils/firebase.utils';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import Dropdown from '../../components/dropdown/dropdown.component';

import './navigation.style.css';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [ time, setTime ] = useState('');
  const userSelector = useSelector(selectCurrentUser);

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const openDropdown = () => {
    setIsCartOpen(!isCartOpen)
  }
  

  useEffect(() => {
    setInterval(() => {
      const setTimeFunc = () => {
        let date = new Date();
        let secs = date.getSeconds();
        let time = `${date.getHours() < 10 ? `${'0' + date.getHours() }` : `${date.getHours()}`}` + ':' + `${date.getMinutes() < 10 ? `${'0' + date.getMinutes()}` : `${date.getMinutes()}`}` + ':' + `${secs < 10 ? `${'0' + secs}` : `${secs}`}`;
        setTime(time);
      }
      setTimeFunc()
    }, 1000)
  }, [time])

  return (
    <>
      <div className='navigation'>
        <Link to='/'>POKEMONS-LOGO-HERE</Link>
        <div className='navigation-links'>
          <div className='current-time'>{time}</div>
          <Link to='shop'>SHOP</Link>
          {userSelector ? <div style={{cursor: 'pointer'}} onClick={signOutUser}>SIGN OUT</div> : <Link to='auth'>SIGN IN</Link>}
          <Link onClick={openDropdown} className='cart-icon'>
            <ShoppingIcon style={{width: '25px', height: '25px'}} />
            <span className='item-count'>{cartCount}</span>
          </Link>
        </div>
        {isCartOpen && <Dropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
