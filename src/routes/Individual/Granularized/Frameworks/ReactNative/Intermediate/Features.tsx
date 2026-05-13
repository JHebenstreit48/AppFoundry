import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// --------------- Features > Intermediate > Start ---------------
const DeviceAPIs = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Features/DeviceAPIs'));

const Permissions = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Features/Permissions'));

const NativeModules = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Features/NativeModules'));
// --------------- Features > Intermediate > End -----------------

const Features: RouteObject[] = [
  // --------------- Features > Intermediate > Start ---------------
  {
    path: '/react-native/intermediate/native/device-apis',
    element: <DeviceAPIs />,
  },
  {
    path: '/react-native/intermediate/native/permissions',
    element: <Permissions />,
  },
  {
    path: '/react-native/intermediate/native/modules',
    element: <NativeModules />,
  },
  // --------------- Features > Intermediate > End -----------------
];

export default Features;