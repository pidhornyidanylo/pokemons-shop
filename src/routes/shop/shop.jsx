import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import Directory from '../../components/directory/directory.component';

import { selectPokemons } from '../../store/pokemons/pokemons.selector';
import { fetchPokemonsAsync } from '../../store/pokemons/pokemons.action';

const Shop = () => {

  const dispatch = useDispatch();
  const poks = useSelector(selectPokemons);
  console.log(poks)

  useEffect(() => {
    dispatch(fetchPokemonsAsync())
  }, [dispatch])

  return (
    <div>
      <Directory pokemons={poks} />
    </div>
  )
}

export default Shop
