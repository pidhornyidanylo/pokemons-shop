import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import poksList from '../../pokemons.data.json';

import './directory.style.css';

const Directory = ({ pokemons }) => {
    return (
    <div className='directory'>
        {pokemons?.map((pokemon, idx) => (
            <DirectoryItem pokemon={pokemon} key={idx + Math.random().toFixed(1)} image={poksList[idx].img} id={poksList[idx].id} quantity={poksList[idx].quantity} />
        ))}  
    </div>
  )
}

export default Directory
