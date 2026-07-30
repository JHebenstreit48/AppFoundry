import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IOSSimulators = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/Xcode/IOSSimulators'));
const SigningAndRun = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Tools/Xcode/SigningAndRun'));

const Xcode: RouteObject[] = [
  {
    path: '/react-native/tools/xcode/ios-simulators',
    element: <IOSSimulators />,
  },
  {
    path: '/react-native/tools/xcode/signing-and-run',
    element: <SigningAndRun />,
  },
];

export default Xcode;
