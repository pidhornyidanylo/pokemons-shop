import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Dropdown from '../../components/dropdown/dropdown.component';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { Outlet, Link } from 'react-router-dom';

import { selectCurrentUser } from '../../store/user/user.selctor'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { signOutUser } from '../../utils/firebase.utils';

import './navigation.style.css';

const Navigation = () => {
  const [ time, setTime ] = useState('');
  const dispatch = useDispatch();

  const userSelector = useSelector(selectCurrentUser);
  const cartCountSelector = useSelector(selectCartCount);
  const cartOpenSelector = useSelector(selectIsCartOpen);

  const openDropdown = () => {
    dispatch(setIsCartOpen(!cartOpenSelector))
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
            <span className='item-count'>{cartCountSelector}</span>
          </Link>
        </div>
        {cartOpenSelector && <Dropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
