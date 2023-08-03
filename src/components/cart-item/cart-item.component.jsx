import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import './cart-item.style.css';

const CartItem = ({ cartItem }) => {
  
  const dispatch = useDispatch();
  const cartItemsSelected = useSelector(selectCartItems);

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItemsSelected, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItemsSelected, cartItem));
  const clearItemHandler = () => dispatch(deleteItemFromCart(cartItemsSelected, cartItem));


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
