import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './main/Main';
import { Initial } from './init/Initial';
import { Games } from './game/Games';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Initial />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/game',
    element: <Games />,
  },
]);

export const Routing = () => (
  <RouterProvider router={router} />
);
