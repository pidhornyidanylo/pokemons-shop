import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PokemonsProvider } from './contexts/pokemons.context';
import { CartProvider } from './contexts/cart.context';

import { store } from './store/store';

import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PokemonsProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </PokemonsProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);