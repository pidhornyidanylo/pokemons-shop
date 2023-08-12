import { takeLatest, all, call, put } from "redux-saga/effects";

import { fetchPokemonsSuccess, fetchPokemonsFailed } from "./pokemons.action";

import { POKEMONS_ACTION_TYPES } from "./pokemons.types";

const callPokemonsAPI = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    return res.json()
}

export function* fetchPokemonsAsync() {
    try {
        const res = yield call(callPokemonsAPI);
        yield put(fetchPokemonsSuccess(res.results));
    } catch (error) {
        yield put(fetchPokemonsFailed(error))
    }
}

export function* onFetchPokemons() {
    yield takeLatest(
        POKEMONS_ACTION_TYPES.FETCH_POKEMONS_START,
        fetchPokemonsAsync
    );
}

export function* pokemonsSaga() {
    yield all([call(onFetchPokemons)])
}