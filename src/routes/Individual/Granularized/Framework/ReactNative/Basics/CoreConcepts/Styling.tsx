import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// --------------- Styling > Fundamentals > Start ---------------
const FundamentalsBasics = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Fundamentals/Basics')
);

const Layout = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Fundamentals/Layout')
);
// --------------- Styling > Fundamentals > End -----------------

// --------------- Styling > Properties > Start ---------------
const PropertiesBasics = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Basics')
);

const Positioning = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Positioning')
);

const Spacing = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Spacing')
);

const Typography = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Typography')
);

const BordersAndShadows = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/BordersAndShadows')
);

const SizeAndDimensions = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/SizeAndDimensions')
);

const Colors = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Colors')
);
// --------------- Styling > Properties > End -----------------

const Styling: RouteObject[] = [
  // --------------- Styling > Fundamentals > Start ---------------
  {
    path: '/react-native/basics/core/styling/fundamentals/basics',
    element: <FundamentalsBasics />,
  },
  {
    path: '/react-native/basics/core/styling/fundamentals/layout',
    element: <Layout />,
  },
  // --------------- Styling > Fundamentals > End -----------------

  // --------------- Styling > Properties > Start ---------------
  {
    path: '/react-native/basics/core/styling/properties/basics',
    element: <PropertiesBasics />,
  },
  {
    path: '/react-native/basics/core/styling/properties/positioning',
    element: <Positioning />,
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
  // --------------- Styling > Properties > End -----------------
];

export default Styling;