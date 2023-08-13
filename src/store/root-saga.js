import { all, call } from 'redux-saga/effects';

import { pokemonsSaga } from './pokemons/pokemons.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
    yield all([call(pokemonsSaga), call(userSagas)])
}