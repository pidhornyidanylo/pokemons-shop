import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { PokemonsProvider } from './contexts/pokemons.context';
import { CartProvider } from './contexts/cart.context';
import { UserProvider } from './contexts/user.context';

import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <PokemonsProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </PokemonsProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);