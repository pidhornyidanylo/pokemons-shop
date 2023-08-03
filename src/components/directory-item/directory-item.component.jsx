import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart } from '../../store/cart/cart.action.js';

import './directory-item.style.css';

const DirectoryItem = ({ pokemon, image, id, quantity }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addPokemonToCart = () => { 
    dispatch(addItemToCart(cartItems, pokemon));

  }

  pokemon.id = id;
  pokemon.quantity = quantity;
  pokemon.image = image; 

  return (
    <div className='pokemon-card'>
        <div className='image-container'>
            <img src={image} alt={pokemon}/>
        </div>
        <div className='pokemon-info'>
            <h3 className='pokemon-name'>{pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}</h3>
        </div>
        <button onClick={addPokemonToCart}>Add to cart</button>
    </div>
  )
}

export default DirectoryItem
