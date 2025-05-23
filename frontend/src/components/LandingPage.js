import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Poketrumps.png'; // adjust path if needed

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/game');
  };

  return (
    <div className="landing-container">
      <img src={logo} alt="Pocket Trumps Logo" className="landing-logo" />
      <button onClick={handlePlayClick} className="landing-button">Play Now</button>
    </div>
  );
};

export default LandingPage;
