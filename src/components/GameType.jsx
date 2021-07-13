import React from 'react';

const GameType = ({ name, description }) => (
  <article>
    <h2>{name}</h2>
    <span>{description}</span>
  </article>
);

export default GameType;
