import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnitTestingWithJest = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Testing/Basics/UnitTestingWithJest'));
const TestingComponents = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Testing/Basics/TestingComponents'));

const Basics: RouteObject[] = [
  {
    path: '/reactnative/testing/jest',
    element: <UnitTestingWithJest />,
  },
  {
    path: '/reactnative/testing/components',
    element: <TestingComponents />,
  },
];

export default Basics;
