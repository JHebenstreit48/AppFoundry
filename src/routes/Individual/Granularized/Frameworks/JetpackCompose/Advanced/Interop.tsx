import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ViewInterop = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/Interop/ViewInterop'));
const NavigationAdvanced = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/Interop/NavigationAdvanced'));

const Interop: RouteObject[] = [
  {
    path: '/jetpack-compose/advanced/interop/view-interop',
    element: <ViewInterop />,
  },
  {
    path: '/jetpack-compose/advanced/interop/navigation-advanced',
    element: <NavigationAdvanced />,
  },
];

export default Interop;
