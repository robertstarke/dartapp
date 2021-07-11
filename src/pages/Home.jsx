import React from 'react';
import gameTypes from '../configs/gameTypes';
import GameType from '../components/GameType.jsx';

const Home = () => (
  <section>
    {gameTypes.map(gameType => (
      <GameType key={gameType.id} name={gameType.name} description={gameType.description} />
    ))}
  </section>
);

export default Home;
