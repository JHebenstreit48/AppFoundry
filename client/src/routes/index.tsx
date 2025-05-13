import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/ErrorHomeSplash/Error';
import Home from '@/Pages/ErrorHomeSplash/Home';

import frameworkRoutes from '@/routes/RoutesDirectories/frameworkRoutesCombined';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      ...frameworkRoutes
    ]
  }
]);
