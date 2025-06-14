import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';

import frameworkRoutes from '@/routes/RoutesDirectories/frameworkRoutesCombined';
import enginesRoutes from '@/routes/RoutesDirectories/enginesRoutesCombined';
import languagesRoutes from '@/routes/RoutesDirectories/languagesRoutesCombined';
import resourcesRoutes from '@/routes/RoutesDirectories/resourcesRoutesCombined';

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
      ...frameworkRoutes,
      ...enginesRoutes,
      ...languagesRoutes,
      ...resourcesRoutes
    ]
  }
]);
