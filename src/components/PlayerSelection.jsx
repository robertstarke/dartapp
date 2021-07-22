import React, { useState } from 'react';
import useStore from '../state/ApplicationState.js';

const PlayerSelection = () => {
  const [playerName, setPlayerName] = useState('');
  const players = useStore((state) => state.players);
  const createPlayer = useStore((state) => state.createPlayer);
  const removePlayer = useStore((state) => state.removePlayer);

  const addPlayer = (e) => {
    e.preventDefault();
    createPlayer(playerName);
    setPlayerName('');
  };

  return (
    <section>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <div>
              {player.name}{' '}
              <button type="button" onClick={() => removePlayer(player.name)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={addPlayer}>
        <input
          type="text"
          placeholder="Player Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
    </section>
  );
};

export default PlayerSelection;
