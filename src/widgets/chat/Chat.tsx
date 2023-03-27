import { useCallback, useEffect } from 'react';
import { useSocket } from '../../shared/api/socket';

export const Chat = () => {
  const { isConnected, socket } = useSocket();

  useEffect(() => {
    console.log('check connected:', socket.connected);

    const showNewMessage = (message: string) => {
      console.log(message);
    };

    if (isConnected) {
      console.log('try to emit');
      socket.on('new-message', showNewMessage);
    }

    return () => {
      socket.off('new-message', showNewMessage);
    };
  }, [socket, isConnected]);

  const handleClick = useCallback(() => {
    socket.emit('message', 'message by click');
  }, [socket]);

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      send the message
    </button>
  );
};
