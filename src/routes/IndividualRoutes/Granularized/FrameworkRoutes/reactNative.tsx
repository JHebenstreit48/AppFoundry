import { RouteObject } from 'react-router-dom';

// Core Concepts - Props, State, Event Handling Start
import Props from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsStateEvent/Props';
import State from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsStateEvent/State';
import EventHandle from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent/EventHandle';
// Core Concepts - JSX and TSX, Event Handling, Props and State End

// Core Concepts - Components - Start
import RNComponentBasics from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/Basics';
import RNComponentCore from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/Core';
import RNComponentBuiltIn from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/BuiltIn';
// Core Concepts - Components - End

// Core Concepts - Styling - Start
import RNStylingBasics from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Basics';
import RNStylePropsBasics from '@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Basics';
// Core Concepts - Styling - End

// Core Concepts - End

// Intermediate - Start
import RNDeviceAPIs from '@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Features/DeviceAPIs';

// Intermediate - End

const frameworks: RouteObject[] = [

  // --------------- React Native > Basics > Core Concepts Start ---------------

  {
    path: '/react-native/basics/core/props-and-state/props',
    element: <Props />
  },
  {
    path: '/react-native/basics/core/props-and-state/state',
    element: <State />
  },
  {
    path: '/react-native/basics/core/propsstate/eventhandling',
    element: <EventHandle /> // Assuming this is a placeholder, replace with actual component for
  },
  // --------------- React Native > Basics > Core Concepts > Components > Start ---------------
  {
    path: '/reactnative/basics/core/components/basics',
    element: <RNComponentBasics />
  },
  {
    path: '/reactnative/basics/core/components/core',
    element: <RNComponentCore />
  },
  {
    path: '/reactnative/basics/core/components/builtin',
    element: <RNComponentBuiltIn />
  },
  // -- --------------- React Native > Basics > Core Concepts > Components > End ---------------

  // --------------- React Native > Basics > Core Concepts > Styling > Start ---------------
  {
    path: '/reactnative/basics/core/styling/basics',
    element: <RNStylingBasics />
  },

  // --------------- React Native > Basics > Core Concepts > Styling > Properties Start ---------------
  {
    path: '/reactnative/basics/core/styling/properties/basics',
    element: <RNStylePropsBasics />
  },

  // --------------- React Native > Basics > Core Concepts > Styling > Properties End ---------------

  // --------------- React Native > Basics > Core Concepts > Styling > End ---------------

  // --------------- React Native Basics > Core Concepts End ---------------

  // --------------- React Native Intermediate > Features ---------------
  {
    path: '/reactnative/intermediate/native/deviceapis',
    element: <RNDeviceAPIs />
  }
  // --------------- React Native Intermediate > Features End ---------------
];

export default frameworks;