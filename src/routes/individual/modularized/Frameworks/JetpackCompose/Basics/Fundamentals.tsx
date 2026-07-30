import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Frameworks/JetpackCompose/Basics/Fundamentals/Introduction'));
const Setup = lazy(() => import('@/pages/mainTabs/Frameworks/JetpackCompose/Basics/Fundamentals/Setup'));
const Structure = lazy(() => import('@/pages/mainTabs/Frameworks/JetpackCompose/Basics/Fundamentals/Structure'));

const Fundamentals: RouteObject[] = [
  {
    path: '/jetpack-compose/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/jetpack-compose/basics/fundamentals/setup',
    element: <Setup />,
  },
  {
    path: '/jetpack-compose/basics/fundamentals/structure',
    element: <Structure />,
  },
];

export default Fundamentals;
