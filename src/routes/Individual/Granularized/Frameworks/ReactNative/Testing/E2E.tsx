import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DetoxOverview = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Testing/E2E/DetoxOverview'));
const SimulatorsAndRealDevices = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Testing/E2E/SimulatorsAndRealDevices'));

const E2E: RouteObject[] = [
  {
    path: '/reactnative/testing/e2e/detox',
    element: <DetoxOverview />,
  },
  {
    path: '/reactnative/testing/e2e/devices',
    element: <SimulatorsAndRealDevices />,
  },
];

export default E2E;
