import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Game {
  id: string;
  userIds: string[];
  name: string;
}

interface GamesState {
  games: Map<string, Game>,
  createGame: (id: string) => void;
}

export const useGamesStore = create<GamesState>()(devtools((set) => ({
  games: new Map<string, Game>(),
  createGame: (id) => set(({ games }) => {
    games.set(id, { id, userIds: [], name: `New game ${games.size + 1}` });
    return { games };
  }),
}), { name: 'games-store' }));
