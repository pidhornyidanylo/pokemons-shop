import { createContext, useState, useEffect } from "react";

export const PokemonsContext = createContext({
    pokemons: []
});

export const PokemonsProvider = ({ children }) => {
    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
              const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
              const data = await res.json();
              setPokemons([...pokemons, data.results]);
            } catch (e) {
              console.log(e);
            }
          }
          fetchPokemons();
    }, []);

    
    const value = { pokemons };
    return (
        <PokemonsContext.Provider value={value}>
            {children}
        </PokemonsContext.Provider>
    )
}
