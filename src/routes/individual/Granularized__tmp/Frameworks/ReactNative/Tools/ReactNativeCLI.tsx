import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/ReactNativeCLI/Overview'));
const Setup = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/ReactNativeCLI/Setup'));
const RunningApps = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/ReactNativeCLI/RunningApps'));

const ReactNativeCLI: RouteObject[] = [
  {
    path: '/react-native/tools/rn-cli/overview',
    element: <Overview />,
  },
  {
    path: '/react-native/tools/rn-cli/setup',
    element: <Setup />,
  },
  {
    path: '/react-native/tools/rn-cli/running',
    element: <RunningApps />,
  },
];

export default ReactNativeCLI;
