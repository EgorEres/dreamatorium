import { useCallback, useEffect } from "react";
import { useSocket } from "../../shared/api/socket-hook";

export const Chat = () => {
  const { isConnected, socket } = useSocket()

  useEffect(() => {
    console.log('check connected:', socket.connected)

    const showNewMessage = (message: string) => {
      console.log(message)
    }

    if (isConnected) {
      console.log('try to emit')
      socket.on('new-message', showNewMessage)

    }

    return () => {
      socket.off('new-message', showNewMessage)
    }
  }, [isConnected])

  const handleClick = useCallback(() => {
    socket.emit('message', 'message by click')
  }, [isConnected])

  return <button onClick={handleClick}>send the message</button>
}