import React, { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context';

import './cart-item.style.css';

const CartItem = ({ cartItem }) => {

  const { clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);


  return (
    <div className='cart-item-body'>
        <div className='image-container-cart'>
          <div className='img-cont-real'>
            <img src={cartItem.image} alt={`${cartItem.name}`} />
          </div>
        </div>
        <span className='name-cart'> {cartItem.name.slice(0, 1).toUpperCase() + cartItem.name.slice(1)} </span>
        <span className='quantity-cart'>
          <div className='arrow' onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className='value'>{cartItem.quantity}</span>
          <div className='arrow' onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <div className='remove-button' onClick={clearItemHandler}>
          &#10005;
        </div>
    </div>
  )
}

export default CartItem
