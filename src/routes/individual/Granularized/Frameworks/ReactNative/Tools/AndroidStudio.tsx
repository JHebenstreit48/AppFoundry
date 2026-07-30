import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AVDsForRN = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/AndroidStudio/AVDsForRN'));
const BuildSDKSetup = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/AndroidStudio/BuildSDKSetup'));

const AndroidStudio: RouteObject[] = [
  {
    path: '/react-native/tools/android-studio/avds',
    element: <AVDsForRN />,
  },
  {
    path: '/react-native/tools/android-studio/build-and-sdk-setup',
    element: <BuildSDKSetup />,
  },
];

export default AndroidStudio;
