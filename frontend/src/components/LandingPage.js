import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Poketrumps.png'; 
import bgImage from '../assets/PokeTrumps-BG.png';
import HowToPlayModal from './HowToPlayModal';

const LandingPage = () => {
  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    navigate('/game');
  };

  return (
    <div
    className="landing-container"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}
  >
      <img src={logo} alt="Pocket Trumps Logo" className="landing-logo" />
      <button onClick={handlePlayClick} className="landing-button">Play Now</button>
      <button
        onClick={() => setShowModal(true)}
        className="landing-button"
        style={{ marginTop: "1rem", backgroundColor: "#1976d2", color: "#fff" }}
      >
        How to Play
      </button>

      {showModal && <HowToPlayModal onClose={() => setShowModal(false)} />}
    </div>
    
  );
};

export default LandingPage;
