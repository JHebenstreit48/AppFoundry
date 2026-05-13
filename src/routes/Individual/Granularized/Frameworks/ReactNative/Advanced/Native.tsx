import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomCode = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/Native/CustomCode'));
const Bridging = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Advanced/Native/Bridging'));

const Native: RouteObject[] = [
  {
    path: '/react-native/advanced/native/custom-code',
    element: <CustomCode />,
  },
  {
    path: '/react-native/advanced/native/bridging',
    element: <Bridging />,
  },
];

export default Native;
