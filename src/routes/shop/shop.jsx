import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import Directory from '../../components/directory/directory.component';

import { selectPokemons } from '../../store/pokemons/pokemons.selector';
import { fetchPokemonsStart } from '../../store/pokemons/pokemons.action';

const Shop = () => {

  const dispatch = useDispatch();
  const poks = useSelector(selectPokemons);

  useEffect(() => {
    dispatch(fetchPokemonsStart())
  }, [dispatch])

  return (
    <div>
      <Directory pokemons={poks} />
    </div>
  )
}

export default Shop
