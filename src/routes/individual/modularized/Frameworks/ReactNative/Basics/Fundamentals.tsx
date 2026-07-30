import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () =>
    import(
      '@/pages/mainTabs/Frameworks/ReactNative/Basics/Fundamentals/Introduction'
    )
);
const Setup = lazy(
  () =>
    import('@/pages/mainTabs/Frameworks/ReactNative/Basics/Fundamentals/Setup')
);
const Structure = lazy(
  () =>
    import(
      '@/pages/mainTabs/Frameworks/ReactNative/Basics/Fundamentals/Structure'
    )
);

const Fundamentals: RouteObject[] = [
  {
    path: '/react-native/basics/fundamentals/introduction',
    element: <Introduction />
  },
  {
    path: '/react-native/basics/fundamentals/setup',
    element: <Setup />
  },
  {
    path: '/react-native/basics/fundamentals/structure',
    element: <Structure />
  }
];

export default Fundamentals;