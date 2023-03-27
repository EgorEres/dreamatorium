import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routing } from '../pages/Routing';
import './globalStyles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
);
