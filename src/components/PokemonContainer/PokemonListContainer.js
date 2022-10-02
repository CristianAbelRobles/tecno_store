import React, { useEffect, useState } from 'react';
import './pokemonListContainer.css';
import PokemonList from './PokemonList';

export default function PokemonListContainer() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then((response) => response.json())
        .then((json) => setPokemons(json.results));
    }, []);

    return (
        <div className="container">
            <h2>Lista de Pokemons</h2>
            <PokemonList pokemons={pokemons} />
        </div>
    );
}