import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Fundamentals/Basics'));
const Layout = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Fundamentals/Layout'));

const Fundamentals: RouteObject[] = [
  {
    path: '/react-native/basics/core/styling/fundamentals/basics',
    element: <Basics />,
  },
  {
    path: '/react-native/basics/core/styling/fundamentals/layout',
    element: <Layout />,
  },
];

export default Fundamentals;
