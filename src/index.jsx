import { createRoot } from 'react-dom/client';
import { Root } from './pages/Root';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import { Home } from './pages/Home/home';
import { ErrorPage } from './pages/Error/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
