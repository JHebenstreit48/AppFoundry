import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// --------------- Navigation > Basics > Start ---------------
const Stack = lazy(() => import('@/pages/mainTabs/Frameworks/ReactNative/Basics/Navigation/Stack'));

const Tab = lazy(() => import('@/pages/mainTabs/Frameworks/ReactNative/Basics/Navigation/Tab'));

const Drawer = lazy(() => import('@/pages/mainTabs/Frameworks/ReactNative/Basics/Navigation/Drawer'));
// --------------- Navigation > Basics > End -----------------

const Navigation: RouteObject[] = [
  // --------------- Navigation > Basics > Start ---------------
  {
    path: '/react-native/basics/navigation/stack',
    element: <Stack />,
  },
  {
    path: '/react-native/basics/navigation/tab',
    element: <Tab />,
  },
  {
    path: '/react-native/basics/navigation/drawer',
    element: <Drawer />,
  },
  // --------------- Navigation > Basics > End -----------------
];

export default Navigation;