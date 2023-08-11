import { combineReducers } from "redux";

import { userReducer } from './user/user.reducer';
import { cartReducer } from "./cart/cart.reducer";
import { pokemonsReducer } from "./pokemons/pokemons.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    pokemons: pokemonsReducer
});