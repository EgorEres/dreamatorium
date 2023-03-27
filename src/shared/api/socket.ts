import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';
const socket = io(URL, {
  autoConnect: false,
});

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    function onConnect() {
      console.log('event connect');
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log('event disconnect');
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  });

  return { isConnected, socket };
};

export default socket;
