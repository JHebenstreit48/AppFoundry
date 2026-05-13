import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallingRunning = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/Expo/ExpoGo/InstallingRunning'));
const Previewing = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/Expo/ExpoGo/Previewing'));
const QRCodesTesting = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/Expo/ExpoGo/QRCodesTesting'));

const ExpoGo: RouteObject[] = [
  {
    path: '/react-native/tools/expo/go/install',
    element: <InstallingRunning />,
  },
  {
    path: '/react-native/tools/expo/go/preview',
    element: <Previewing />,
  },
  {
    path: '/react-native/tools/expo/go/qr',
    element: <QRCodesTesting />,
  },
];

export default ExpoGo;
