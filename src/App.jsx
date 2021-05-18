import { Component } from 'react';
import PokemonsProvider from './context/pokemons/Provider';

import Routes from './routes';

export default function App() {
    return (
        <PokemonsProvider>
            <Routes />
        </PokemonsProvider>
    );
}