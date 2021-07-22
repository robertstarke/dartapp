import React, { useState } from 'react';
import gameTypes from '../configs/gameTypes';
import GameType from '../components/GameType.jsx';
import PlayerSelection from '../components/PlayerSelection.jsx';

const Home = () => {
  const [activeGameType, setActiveGameType] = useState(null);

  return (
    <>
      <PlayerSelection />
      <section>
        {gameTypes.map((gameType) => (
          <GameType
            key={gameType.id}
            gameType={gameType}
            active={gameType.id === activeGameType}
            onClick={setActiveGameType}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
