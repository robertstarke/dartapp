import React from 'react';

const ScoreBbuttons = ({ options, onChange }) => {
  const buttons = [];

  for (let i = 0; i <= 20; i++) {
    buttons.push(
      <div key={i}>
        <button value={i}>{i}</button>
        <button value={i * 2}>{`D${i}`}</button>
        <button value={i * 3}>{`T${i}`}</button>
      </div>
    );
  }

  return (
    <div>
      {buttons}
      <button value="25">Outer Bull</button>
      <button value="50">Inner Bull</button>
      <button value="0">No Score</button>
    </div>
  );
};

export default ScoreBbuttons;
