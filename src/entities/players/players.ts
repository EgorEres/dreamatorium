import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Player {
  id: string;
  name: string;
  cardIds?: number[];
  connected?: boolean;
}

interface PlayersState {
  players: {
    [key: string]: Player;
  };
  addPlayer: (playersData: Player) => void;
  disconnectPlayers: (id: string) => void;
}

export const usePlayersStore = create<PlayersState>()(devtools((set) => ({
  players: {},
  addPlayer: (playersData) => set(
    ({ players }) => ({
      players: {...players, [playersData.id]: playersData}
    }),
    false,
    'players/add'
  ),
  disconnectPlayers: (playersId) => set(({ players }) => {
    const player = players[playersId]
    if (player) {
      return {
        players: {
          ...players,
          [playersId]: {
            ...player,
            connected: false,
          }
        }
      }
    }
    return { players }
  }),
}), {
  name: 'players-store'
}))
