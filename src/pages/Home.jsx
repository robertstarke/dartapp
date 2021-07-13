import React from 'react';
import gameTypes from '../configs/gameTypes';
import GameType from '../components/GameType.jsx';
import { PlayerProvider } from '../context/PlayerContext.jsx';
import PlayerSelection from '../components/PlayerSelection.jsx';

const Home = () => (
  <PlayerProvider>
    <PlayerSelection />
    <section>
      {gameTypes.map((gameType) => (
        <GameType key={gameType.id} name={gameType.name} description={gameType.description} />
      ))}
    </section>
  </PlayerProvider>
);

export default Home;
