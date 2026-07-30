import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Components/Basics'));

const Core = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Components/Core'));

const BuiltIn = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Components/BuiltIn'));

const Patterns = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Components/Patterns'));

const Components: RouteObject[] = [
  {
    path: '/react-native/basics/core/components/basics',
    element: <Basics />,
  },
  {
    path: '/react-native/basics/core/components/core',
    element: <Core />,
  },
  {
    path: '/react-native/basics/core/components/built-in',
    element: <BuiltIn />,
  },
  {
    path: '/react-native/basics/core/components/patterns',
    element: <Patterns />,
  },
];

export default Components;