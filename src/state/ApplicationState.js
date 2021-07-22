import create from 'zustand';

const useStore = create((set) => ({
  players: [],
  currentGame: {},
  createPlayer: (name) => {
    set((state) => ({
      players: [{ name }, ...state.players]
    }));
  },
  removePlayer: (name) => {
    set((state) => ({
      players: state.players.filter((player) => player.name !== name)
    }));
  },
  createGame: (type, options, initialScore) => {
    set((state) => ({
      currentGame: {
        type,
        options,
        players: state.players.map((player) => ({ name: player.name, score: initialScore }))
      }
    }));
  }
}));

export default useStore;
