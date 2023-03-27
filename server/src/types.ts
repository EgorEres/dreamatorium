export enum SOCKET_EVENTS {
  // common events
  disconnect = 'disconnect',
  
  // game events
  create_new_game = 'create_new_game',
  join_to_game = 'join_to_game',
  user_joined = 'user_joined',

  // chat events
  new_messaga = 'new_message',
}