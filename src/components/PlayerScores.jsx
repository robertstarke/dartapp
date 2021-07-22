import React from 'react';
import useStore from '../state/ApplicationState';

const PlayerScores = () => {
  const players = useStore((state) => state.currentGame?.players);

  return (
    <div>
      {players.map((player) => (
        <div key={player.name}>
          {player.name}: {player.score}
        </div>
      ))}
    </div>
  );
};

export default PlayerScores;
