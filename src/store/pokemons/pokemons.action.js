import { createAction } from "../../utils/reducer.utils";
import { POKEMONS_ACTION_TYPES } from "./pokemons.types";

export const fetchPokemonsStart = () => createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_START);
export const fetchPokemonsSuccess = (payload) => createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_SUCCESS, payload);
export const fetchPokemonsFailed = (error) => createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_FAILED, error);


// export const fetchPokemonsAsync = () => async (dispatch) => {
//     dispatch(fetchPokemonsStart())
//     try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
//         const data = await res.json();
//         dispatch(fetchPokemonsSuccess(data.results));
//     } catch (error) {
//         dispatch(fetchPokemonsFailed(error))
//     }
// } 