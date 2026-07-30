import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Composables = lazy(() => import('@/pages/mainTabs/Frameworks/JetpackCompose/Basics/Core/Composables'));
const StateAndEvents = lazy(() => import('@/pages/mainTabs/Frameworks/JetpackCompose/Basics/Core/StateAndEvents'));
const Lists = lazy(() => import('@/pages/mainTabs/Frameworks/JetpackCompose/Basics/Core/Lists'));
const Gestures = lazy(() => import('@/pages/mainTabs/Frameworks/JetpackCompose/Basics/Core/Gestures'));

const Core: RouteObject[] = [
  {
    path: '/jetpack-compose/basics/core/composables',
    element: <Composables />,
  },
  {
    path: '/jetpack-compose/basics/core/state-and-events',
    element: <StateAndEvents />,
  },
  {
    path: '/jetpack-compose/basics/core/lists-lazy',
    element: <Lists />,
  },
  {
    path: '/jetpack-compose/basics/core/gestures',
    element: <Gestures />,
  },
];

export default Core;
