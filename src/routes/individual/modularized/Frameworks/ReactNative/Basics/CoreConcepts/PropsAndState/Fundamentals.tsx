import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Props = lazy(() => import('@/pages/mainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Fundamentals/Props'));
const State = lazy(() => import('@/pages/mainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Fundamentals/State'));

const Fundamentals: RouteObject[] = [
  {
    path: '/react-native/basics/core/props-and-state/fundamentals/props',
    element: <Props />,
  },
  {
    path: '/react-native/basics/core/props-and-state/fundamentals/state',
    element: <State />,
  },
];

export default Fundamentals;
