import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// --------------- Props & State > Fundamentals > Start ---------------
const Props = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Fundamentals/Props')
);

const State = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Fundamentals/State')
);
// --------------- Props & State > Fundamentals > End -----------------

// --------------- Props & State > Async/API State > Start -----------
const FetchAndAxios = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/AsyncAPI/FetchAndAxios')
);

const ManagingApiState = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/AsyncAPI/ManagingApiState')
);
// --------------- Props & State > Async/API State > End -------------

// --------------- Props & State > Global State > Start ---
const ContextApi = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/ContextApi')
);

const ProvidersAndPerformance = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/ProvidersAndPerformance')
);

const RtkAndRtkQuery = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/RtkAndRtkQuery')
);

const PersistAndOffline = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/PersistAndOffline')
);
// --------------- Props & State > Global State > End -----

const PropsAndState: RouteObject[] = [
  // --------------- Props & State > Fundamentals > Start ---------------
  {
    path: '/react-native/basics/core/props-and-state/fundamentals/props',
    element: <Props />,
  },
  {
    path: '/react-native/basics/core/props-and-state/fundamentals/state',
    element: <State />,
  },
  // --------------- Props & State > Fundamentals > End -----------------

  // --------------- Props & State > Async/API State > Start -----------
  {
    path: '/react-native/basics/core/props-and-state/async-and-api/fetch-and-axios',
    element: <FetchAndAxios />,
  },
  {
    path: '/react-native/basics/core/props-and-state/async-and-api/managing-api-state',
    element: <ManagingApiState />,
  },
  // --------------- Props & State > Async/API State > End -------------

  // --------------- Props & State > Global State > Start ---
  {
    path: '/react-native/basics/core/props-and-state/global/context-api',
    element: <ContextApi />,
  },
  {
    path: '/react-native/basics/core/props-and-state/global/providers-and-performance',
    element: <ProvidersAndPerformance />,
  },
  {
    path: '/react-native/basics/core/props-and-state/global/rtk-and-rtk-query',
    element: <RtkAndRtkQuery />,
  },
  {
    path: '/react-native/basics/core/props-and-state/global/persist-and-offline',
    element: <PersistAndOffline />,
  },
  // --------------- Props & State > Global State > End -----
];

export default PropsAndState;