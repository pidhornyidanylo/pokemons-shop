import { all, call } from 'redux-saga/effects';

import { pokemonsSaga } from './pokemons/pokemons.saga';

export function* rootSaga() {
    yield all([call(pokemonsSaga)])
}