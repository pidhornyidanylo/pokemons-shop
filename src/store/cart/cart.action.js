import { createAction } from '../../utils/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = ( pokemons, pokemonToAdd ) => {
    const existingPokemon = pokemons.find(
        pokemon => pokemon.id === pokemonToAdd.id
    )

    if(existingPokemon) {
        return pokemons.map((pokemon) => pokemon.id === pokemonToAdd.id 
        ? { ...pokemon, quantity: pokemon.quantity + 1 } 
        : pokemon 
        )
    }

    return [...pokemons, { ...pokemonToAdd, quantity: 1 }];
}

const removeCartItem = ( pokemons, pokemonToRemove ) => {
    const existingPokemon = pokemons.find(
        pokemon => pokemon.id === pokemonToRemove.id
    )

    if(existingPokemon.quantity === 1) {
        return pokemons.filter(pokemon => pokemon.id !== pokemonToRemove.id)
    }

    return pokemons.map(pokemon => pokemon.id === pokemonToRemove.id ? { ...pokemon, quantity: pokemon.quantity - 1 } : pokemon)
}

const deleteCartItem = (pokemons, pokemonToDelete) => {
    return pokemons.filter(pokemon => pokemon.id !== pokemonToDelete.id);
}

export const addItemToCart = ( pokemons, pokemonToAdd ) => {
    const newCartItems = addCartItem( pokemons, pokemonToAdd );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = ( pokemons, pokemonToRemove ) => {
    const newCartItems = removeCartItem( pokemons, pokemonToRemove );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const deleteItemFromCart = ( pokemons, pokemonToDelete ) => {
    const newCartItems = deleteCartItem( pokemons, pokemonToDelete );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const setIsCartOpen = boolean => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)