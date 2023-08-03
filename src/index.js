import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PokemonsProvider } from './contexts/pokemons.context';

import { store } from './store/store';

import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PokemonsProvider>
                    <App />
                </PokemonsProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);