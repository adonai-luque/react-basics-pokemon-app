import React from "react";

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
};

export default PokemonList;
