import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/MetroBundler/Overview'));
const ManualAccessCommands = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/MetroBundler/ManualAccessCommands'));

const MetroBundler: RouteObject[] = [
  {
    path: '/react-native/tools/metro/overview',
    element: <Overview />,
  },
  {
    path: '/react-native/tools/metro/usage',
    element: <ManualAccessCommands />,
  },
];

export default MetroBundler;
