import React, { createContext, useState, useContext } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const value = { players, setPlayers };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};
