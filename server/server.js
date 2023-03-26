import express from 'express'
import http from 'http'
import { Server } from "socket.io"

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173"
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (msg) => {
    console.log('message: ' + msg);

    socket.emit('new-message', `new message: ${msg}`)
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
