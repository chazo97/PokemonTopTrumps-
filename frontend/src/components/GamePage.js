// src/components/GamePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/Poketrumps.png';
import bgImage from '../assets/PokeTrumps-BG.png'; 
import './GamePage.css';
import PokemonCard from './PokemonCard';

const GamePage = () => {
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(true);

  const [winCount, setWinCount] = useState(() => {
    const stored = localStorage.getItem('winCount');
    return stored ? parseInt(stored, 10) : 0;
  });

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

  useEffect(() => {
    if (result && result.toLowerCase() === 'win') {
      setWinCount(prev => {
        const newCount = prev + 1;
        localStorage.setItem('winCount', newCount);
        return newCount;
      });
    }
  }, [result]);

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
        setLoading(false);
      })
      .catch(error => {
        console.error('Error restarting game', error);
      });
  };

  return (
    <div
      className="game-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      <Link to="/">
        <img src={logo} alt="Poketrumps Logo" className="landing-logo" style={{ width: '250px', maxWidth: '90vw', marginBottom: '1.5rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </Link>
      {loading && <p>Loading...</p>}

      <div className="card-grid">
        {playerPokemon && (
          <PokemonCard pokemon={playerPokemon} title="Your Pokémon">
            {!opponentPokemon && (
              <div className="stat-buttons">
                <button onClick={() => handleStatClick('id')}>ID</button>
                <button onClick={() => handleStatClick('height')}>Height</button>
                <button onClick={() => handleStatClick('weight')}>Weight</button>
              </div>
            )}
          </PokemonCard>
        )}

        {opponentPokemon && (
          <PokemonCard pokemon={opponentPokemon} title="Opponent's Pokémon" />
        )}
      </div>

      {result && (
        <div className="result-section">
          <h2 className={`result game-title ${result.toLowerCase()}`}>{result.toUpperCase()}</h2>
          <div className="win-count game-title">Winning count: {winCount}</div>
          <button className="play-button" onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default GamePage;
