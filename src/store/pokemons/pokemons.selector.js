import { createSelector } from "reselect";

const selectPokemonReducer = state => state.pokemons

export const selectPokemons = createSelector(
    [selectPokemonReducer],
    pokemons => pokemons.pokemons 
)

