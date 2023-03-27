import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { SocketEvents } from './types';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
  },
});

app.get('/', (req, res) => {
  res.send('<h1>Server is working!</h1>');
});

interface Game {
  gameId: string;
  name: string;
  userIds: string[];
}

const games = new Map<string, Game>();

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (msg) => {
    console.log(`message: ${msg}`);

    socket.emit('new-message', `new message: ${msg}`);
  });

  socket.on('create_new_game', (callback) => {
    console.log('try to create new game');
    const gameId = uuidv4();
    const newGame: Game = {
      gameId,
      name: `new game ${games.size + 1}`,
      userIds: [],
    };

    games.set(gameId, newGame);
    socket.join(gameId);
    callback(newGame);
    console.log('success');
  });

  socket.on(SocketEvents.join_to_game, (gameId, userData) => {
    socket.join(gameId);
    socket.to(gameId).emit(SocketEvents.user_joined, userData);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
