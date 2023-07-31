import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';

import CartItem from '../../components/cart-item/cart-item.component';

import './cart.style.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

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
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
  </div>
  )
}

export default Cart
