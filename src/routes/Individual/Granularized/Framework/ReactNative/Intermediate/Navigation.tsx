import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// --------------- Navigation > Intermediate > Start ---------------
const ConditionalRoutes = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Navigation/ConditionalRoutes'
    )
);

const DeepLinking = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Navigation/DeepLinking'
    )
);

const Performance = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Navigation/Performance'
    )
);
// --------------- Navigation > Intermediate > End -----------------

const Navigation: RouteObject[] = [
  // --------------- Navigation > Intermediate > Start ---------------
  {
    path: '/react-native/intermediate/navigation/conditional-routes',
    element: <ConditionalRoutes />,
  },
  {
    path: '/react-native/intermediate/navigation/deep-linking',
    element: <DeepLinking />,
  },
  {
    path: '/react-native/intermediate/navigation/performance',
    element: <Performance />,
  },
  // --------------- Navigation > Intermediate > End -----------------
];

export default Navigation;