import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Frameworks/ReactNative/Tools/Expo/CLI/Introduction'));
const Workflow = lazy(() => import('@/pages/mainTabs/Frameworks/ReactNative/Tools/Expo/CLI/Workflow'));

const CLI: RouteObject[] = [
  {
    path: '/react-native/tools/expo/cli/introduction',
    element: <Introduction />,
  },
  {
    path: '/react-native/tools/expo/cli/workflow',
    element: <Workflow />,
  },
];

export default CLI;