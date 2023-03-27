import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routing } from '../pages/Routing';
import socket from '../shared/api/socket';
import './globalStyles.css';

socket.connect();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
);
