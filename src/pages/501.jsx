import React, { useState } from 'react';
import gameTypes from '../configs/gameTypes';

const Page501 = () => {
  const [startGame, setStartGame] = useState(false);
  const [players, setPlayers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <section>
      {!startGame && (
        <>
          <PlayerSelection setPlayers={setPlayers} />
          <Options
            options={gameTypes.find((gameType) => gameType.id === '501').options}
            setOptions={setSelectedOptions}
          />
        </>
      )}
      {startGame && (
        <>
          <Game501 players={players} options={selectedOptions} />
        </>
      )}
    </section>
  );
};

export default Page501;
