import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import useStore from '../state/ApplicationState.js';
import GameOptions from './GameOptions.jsx';

const GameType = ({ gameType, active, onClick, history }) => {
  const createGame = useStore((state) => state.createGame);

  const [selectedOptions, setSelectedOptions] = useState(
    gameType.options.filter((option) => option.default).map((option) => option.id)
  );

  const changeOption = (optionID, isChecked) => {
    const newState = selectedOptions.filter((option) => option !== optionID);
    if (isChecked) {
      newState.push(optionID);
    }
    setSelectedOptions(newState);
  };

  const startNewGame = () => {
    createGame(gameType.id, selectedOptions, gameType.initialScore);
    history.push(`/${gameType.id}`);
  };

  return (
    <article>
      {!active ? (
        <div className="front" onClick={() => onClick(gameType.id)}>
          <h2>{gameType.name}</h2>
          <span>{gameType.description}</span>
        </div>
      ) : (
        <div className="back">
          <GameOptions options={gameType.options} onChange={changeOption} />
          <button type="button" onClick={startNewGame}>
            Start Game
          </button>
          <button type="button" onClick={() => onClick(null)}>
            Back
          </button>
        </div>
      )}
    </article>
  );
};

export default withRouter(GameType);
