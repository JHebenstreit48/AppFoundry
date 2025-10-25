import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';
import About from '@/Pages/Special/About';

import frameworks from '@/routes/Sections/frameworks';
import engines from '@/routes/Sections/engines';
import languages from '@/routes/Sections/languages';
import resources from '@/routes/Sections/resources';

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
      ...engines,
      ...languages,
      ...resources
    ]
  }
]);
