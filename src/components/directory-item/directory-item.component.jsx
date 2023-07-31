import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context.jsx';

import './directory-item.style.css';

const DirectoryItem = ({ pokemon, image, id, quantity }) => {
  const { addItemToCart, setCartCount, cartCount } = useContext(CartContext);
  pokemon.id = id;
  pokemon.quantity = quantity;
  pokemon.image = image; 
  const addPokemonToCart = () => {
    addItemToCart(pokemon);
    setCartCount(cartCount + 1)
  };

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
