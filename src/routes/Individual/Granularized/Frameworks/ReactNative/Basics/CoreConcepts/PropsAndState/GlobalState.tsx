import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContextAPI = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/ContextApi'));
const ProvidersAndPerformance = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/ProvidersAndPerformance'));
const RTKAndRTKQuery = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/RtkAndRtkQuery'));
const PersistAndOffline = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/PersistAndOffline'));

const GlobalState: RouteObject[] = [
  {
    path: '/react-native/basics/core/props-and-state/global/context-api',
    element: <ContextAPI />,
  },
  {
    path: '/react-native/basics/core/props-and-state/global/providers-and-performance',
    element: <ProvidersAndPerformance />,
  },
  {
    path: '/react-native/basics/core/props-and-state/global/rtk-and-rtk-query',
    element: <RTKAndRTKQuery />,
  },
  {
    path: '/react-native/basics/core/props-and-state/global/persist-and-offline',
    element: <PersistAndOffline />,
  },
];

export default GlobalState;
