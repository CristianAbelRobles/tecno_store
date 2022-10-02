import React from 'react'
import Pokemon from './Pokemon'

const List = ({ pokemons }) => {
    return (
        <div className="d-flex flex-wrap">
            
                {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
                ))}
        </div>
    );
};

export default List;