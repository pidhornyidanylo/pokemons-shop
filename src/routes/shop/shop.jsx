import React, { useContext } from 'react'

import Directory from '../../components/directory/directory.component';

import { PokemonsContext } from '../../contexts/pokemons.context.jsx';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const poks = useContext(PokemonsContext);

  const navigate = useNavigate();
  const goToQuestion = () => {
    navigate('/quick')
  }

  return (
    <div>
      <Directory pokemons={poks.pokemons} />
      <button onClick={goToQuestion}>Ask one question for us, please</button>
    </div>
  )
}

export default Shop
