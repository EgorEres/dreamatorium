import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import socket from '../../shared/api/socket';

interface Game {
  id: string;
  userIds: string[];
  name: string;
}

interface GamesState {
  games: Map<string, Game>,
  createGame: () => void;
}

export const useGamesStore = create<GamesState>()(devtools((set) => ({
  games: new Map<string, Game>(),
  createGame: () => {
    socket.emit('create_new_game', (response: any, a: any, b: any) => {
      console.log('check response:', response, a, b);
    });
    set(({ games }) => ({ games }));
  },
}), { name: 'games-store' }));
