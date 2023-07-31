import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import DropdownItem from '../dropdown-item/dropdown-item.component';

import './dropdown.style.css';

const Dropdown = () => {

  const navigate = useNavigate();

  const goToCartHandler = () => {
    navigate('/cart')
  }

  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className='dropdown-container'>
        <div className='dropdown-items'>
            {cartItems.map(item => (
              <DropdownItem item={item} />
            ))}
        </div>
        <button onClick={goToCartHandler}>Go to checkout</button>
    </div>
  )
}

export default Dropdown
