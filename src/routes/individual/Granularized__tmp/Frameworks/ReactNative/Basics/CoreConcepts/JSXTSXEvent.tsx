import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSXAndTSX = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent/JSXAndTSX'
    )
);
const EventHandle = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent/EventHandle'
    )
);

const JSXTSXEvent: RouteObject[] = [
  {
    path: '/react-native/basics/core/jsx-tsx-event/jsx-and-tsx',
    element: <JSXAndTSX />
  },
  {
    path: '/react-native/basics/core/jsx-tsx-event/event-handling',
    element: <EventHandle />
  }
];

export default JSXTSXEvent;