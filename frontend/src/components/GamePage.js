// src/components/GamePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GamePage.css';

const GamePage = () => {
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/player')
      .then(response => {
        setPlayerPokemon(response.data.player);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      });
  }, []);

  const handleStatClick = (stat) => {
    axios.post('http://127.0.0.1:5000/api/compare', {
      player: playerPokemon,
      stat: stat
    })
      .then(response => {
        setOpponentPokemon(response.data.opponent);
        setResult(response.data.result);
      })
      .catch(error => {
        console.error('Error comparing stats:', error);
      });
  };

  const handlePlayAgain = () => {
    axios.get('http://127.0.0.1:5000/api/play')
      .then(response => {
        setPlayerPokemon(response.data.player);
        setOpponentPokemon(null);
        setResult('');
      })
      .catch(error => {
        console.error('Error restarting game', error);
      });
  };

  const getSprite = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="game-container">
      <h1 className="game-title">Top Trumps Pokémon</h1>
      {loading && <p>Loading...</p>}

      <div className="card-grid">
        {playerPokemon && (
          <div className="card-wrapper">
            <div className="pokemon-card">
              <div className="card-top">Your Pokémon</div>
              <h3 className="card-name">{playerPokemon.name}</h3>
              <div className="card-image-box">
                <img
                  src={getSprite(playerPokemon.id)}
                  alt={playerPokemon.name}
                  className="pokemon-image"
                />
              </div>
              <div className="card-bottom">
                <div className="card-stats">
                  <div><strong>ID:</strong> {playerPokemon.id}</div>
                  <div><strong>Height:</strong> {playerPokemon.height}</div>
                  <div><strong>Weight:</strong> {playerPokemon.weight}</div>
                </div>
              </div>

              {!opponentPokemon && (
                <div className="stat-buttons">
                  <button onClick={() => handleStatClick('id')}>ID</button>
                  <button onClick={() => handleStatClick('height')}>Height</button>
                  <button onClick={() => handleStatClick('weight')}>Weight</button>
                </div>
              )}
            </div>
          </div>
        )}

        {opponentPokemon && (
          <div className="card-wrapper">
            <div className="pokemon-card">
              <div className="card-top">Opponent's Pokémon</div>
              <h3 className="card-name">{opponentPokemon.name}</h3>
              <div className="card-image-box">
                <img
                  src={getSprite(opponentPokemon.id)}
                  alt={opponentPokemon.name}
                  className="pokemon-image"
                />
              </div>
              <div className="card-bottom">
                <div className="card-stats">
                  <div><strong>ID:</strong> {opponentPokemon.id}</div>
                  <div><strong>Height:</strong> {opponentPokemon.height}</div>
                  <div><strong>Weight:</strong> {opponentPokemon.weight}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {result && (
        <div className="result-section">
          <h2 className={`result ${result.toLowerCase()}`}>{result.toUpperCase()}</h2>
          <button className="play-button" onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default GamePage;
