import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Basics'));
const PositioningAndAlignment = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Positioning'));
const Spacing = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Spacing'));
const Typography = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Typography'));
const BordersAndShadows = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/BordersAndShadows'));
const SizeAndDimensions = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/SizeAndDimensions'));
const Colors = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Colors'));

const Properties: RouteObject[] = [
  {
    path: '/react-native/basics/core/styling/properties/basics',
    element: <Basics />,
  },
  {
    path: '/react-native/basics/core/styling/properties/positioning',
    element: <PositioningAndAlignment />,
  },
  {
    path: '/react-native/basics/core/styling/properties/spacing',
    element: <Spacing />,
  },
  {
    path: '/react-native/basics/core/styling/properties/typography',
    element: <Typography />,
  },
  {
    path: '/react-native/basics/core/styling/properties/borders-and-shadows',
    element: <BordersAndShadows />,
  },
  {
    path: '/react-native/basics/core/styling/properties/size-and-dimensions',
    element: <SizeAndDimensions />,
  },
  {
    path: '/react-native/basics/core/styling/properties/colors',
    element: <Colors />,
  },
];

export default Properties;
