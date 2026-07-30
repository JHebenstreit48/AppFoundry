import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import ErrorPage from '@/Pages/Special/Error';
import Home from '@/Pages/Special/Home';
import About from '@/Pages/Special/About';
import QRCodePage from '@/Pages/Special/qrCode';

import frameworks from '@/routes/sections/frameworks';
import engines from '@/routes/sections/engines';
import languages from '@/routes/sections/languages';
import resources from '@/routes/sections/resources';

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
      { path: 'qrcode', element: <QRCodePage /> },
      ...frameworks,
      ...engines,
      ...languages,
      ...resources
    ]
  }
]);