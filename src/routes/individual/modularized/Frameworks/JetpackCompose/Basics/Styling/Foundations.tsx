import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Styling/Foundations/Basics'));
const Layout = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Styling/Foundations/Layout'));

const Foundations: RouteObject[] = [
  {
    path: '/jetpack-compose/basics/styling/basics',
    element: <Basics />,
  },
  {
    path: '/jetpack-compose/basics/styling/layout',
    element: <Layout />,
  },
];

export default Foundations;
