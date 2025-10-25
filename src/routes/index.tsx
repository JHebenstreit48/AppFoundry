import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';
import About from '@/Pages/Special/About';

import frameworks from '@/routes/FullSections/frameworks';
import enginesRoutes from '@/routes/FullSections/engines';
import languagesRoutes from '@/routes/FullSections/languages';
import resourcesRoutes from '@/routes/FullSections/resources';

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
      { path: 'about', element: <About /> },
      ...frameworks,
      ...enginesRoutes,
      ...languagesRoutes,
      ...resourcesRoutes
    ]
  }
]);
