import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/Expo/CLI/Overview'));
const Workflow = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/Expo/CLI/Workflow'));

const CLI: RouteObject[] = [
  {
    path: '/react-native/tools/expo/cli/overview',
    element: <Overview />,
  },
  {
    path: '/react-native/tools/expo/cli/workflow',
    element: <Workflow />,
  },
];

export default CLI;