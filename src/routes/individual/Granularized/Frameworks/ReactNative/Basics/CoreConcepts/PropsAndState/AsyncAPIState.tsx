import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FetchAndAxios = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/AsyncAPI/FetchAndAxios'));
const ManagingAPIState = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsState/AsyncAPI/ManagingApiState'));

const AsyncAPIState: RouteObject[] = [
  {
    path: '/react-native/basics/core/props-and-state/async-and-api/fetch-and-axios',
    element: <FetchAndAxios />,
  },
  {
    path: '/react-native/basics/core/props-and-state/async-and-api/managing-api-state',
    element: <ManagingAPIState />,
  },
];

export default AsyncAPIState;
