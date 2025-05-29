import React from 'react';
import './HowToPlayModal.css';

const HowToPlay = ({ onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>How to Play</h2>
      <ul>
        <li>You will be given a random Pokémon card.</li>
        <li>Pick a stat (ID, Height, or Weight) and click on your chosen stat</li>
        <li>Your opponent gets a random Pokémon card.</li>
        <li>If your stat beats theirs, you win!</li>
        <li>See how many wins you can get and good luck</li>
      </ul>
      <button onClick={onClose} className="close-btn">Close</button>
    </div>
  </div>
);

export default HowToPlay;
