import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DebuggingAndTesting = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/CICD/DebuggingAndTesting'));
const CICDPipelines = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/CICD/CICDPipelines'));
const EnvironmentVariables = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/CICD/EnvironmentVariables'));

const CICD: RouteObject[] = [
  {
    path: '/react-native/advanced/build/debugging',
    element: <DebuggingAndTesting />,
  },
  {
    path: '/react-native/advanced/build/cicd',
    element: <CICDPipelines />,
  },
  {
    path: '/react-native/advanced/build/env',
    element: <EnvironmentVariables />,
  },
];

export default CICD;
