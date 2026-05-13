import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HandlingLargeLists = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/Performance/HandlingLargeLists'));
const AnimationsAndGestures = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/Performance/AnimationsAndGestures'));
const MemoryOptimization = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/Performance/MemoryOptimization'));

const Performance: RouteObject[] = [
  {
    path: '/react-native/advanced/performance/lists',
    element: <HandlingLargeLists />,
  },
  {
    path: '/react-native/advanced/performance/animations',
    element: <AnimationsAndGestures />,
  },
  {
    path: '/react-native/advanced/performance/memory',
    element: <MemoryOptimization />,
  },
];

export default Performance;
