import React, { useContext, useState } from 'react';
import { PlayerContext } from '../context/PlayerContext.jsx';

const PlayerSelection = () => {
  const [playerName, setPlayerName] = useState('');
  const { players, setPlayers } = useContext(PlayerContext);

  const addPlayer = (e) => {
    e.preventDefault();
    setPlayers([...players, { name: playerName }]);
    setPlayerName('');
  };

  const removePlayer = (playerName) => {
    setPlayers(players.filter((player) => player.name !== playerName));
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
