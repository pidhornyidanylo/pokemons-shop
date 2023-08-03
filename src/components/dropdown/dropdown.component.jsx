import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DropdownItem from '../dropdown-item/dropdown-item.component';

import { selectCartItems } from '../../store/cart/cart.selector';

import './dropdown.style.css';

const Dropdown = () => {

  const navigate = useNavigate();

  const goToCartHandler = () => {
    navigate('/cart')
  }
  
  const cartItemsSelect = useSelector(selectCartItems);


  return (
    <div className='dropdown-container'>
        <div className='dropdown-items'>
            {cartItemsSelect.map(item => (
              <DropdownItem item={item} />
            ))}
        </div>
        <button onClick={goToCartHandler}>Go to checkout</button>
    </div>
  )
}

export default Dropdown
