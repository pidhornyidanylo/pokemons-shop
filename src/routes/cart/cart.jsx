import React from 'react'

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import CartItem from '../../components/cart-item/cart-item.component';

import './cart.style.css';

const Cart = () => {
  const cartItemsSelected = useSelector(selectCartItems)

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <div className='header-block'>
          <span>Pokemon</span>
        </div>
        <div className='header-block'>
          <span>Name</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItemsSelected.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
  </div>
  )
}

export default Cart
