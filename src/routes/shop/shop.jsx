import React, { useContext } from 'react'

import Directory from '../../components/directory/directory.component';

import { PokemonsContext } from '../../contexts/pokemons.context.jsx';

const Shop = () => {
  const poks = useContext(PokemonsContext);

  return (
    <div>
      <Directory pokemons={poks.pokemons} />
    </div>
  )
}

export default Shop
