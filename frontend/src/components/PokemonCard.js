import React from 'react';

const PokemonCard = ({ pokemon, title, children }) => {
  const getSprite = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="card-wrapper">
      <div className="pokemon-card">
        <div className="card-top">{title}</div>
        <h3 className="card-name">{pokemon.name}</h3>
        <div className="card-image-box">
          <img
            src={getSprite(pokemon.id)}
            alt={pokemon.name}
            className="pokemon-image"
          />
        </div>
        <div className="card-bottom">
          <div className="card-stats">
            <div><strong>ID:</strong> {pokemon.id}</div>
            <div><strong>Height:</strong> {pokemon.height}</div>
            <div><strong>Weight:</strong> {pokemon.weight}</div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PokemonCard;
