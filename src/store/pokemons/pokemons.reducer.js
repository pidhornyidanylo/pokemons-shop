import { POKEMONS_ACTION_TYPES } from "./pokemons.types"

const POKEMONS_INITIAL_STATE = {
    pokemons: [],
    isLoading: false,
    error: null
}

export const pokemonsReducer = (state = POKEMONS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_START:
            return { ...state, isLoading: true }
        case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_SUCCESS: 
            return { ...state, pokemons: payload, isLoading: false }
        case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_FAILED:
            return { ...state, error: payload, isLoading: false }
        default:
            return state;
    } 
}

