import { RouteObject } from "react-router-dom";

import RNIntro from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/Fundamentals/RNIntro";
import RNSetup from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/Fundamentals/RNSetup";

import RNJSXTSX from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/JSXAndTSX";

// Core Concepts - Components - Start
import RNComponentBasics from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/Basics";
import RNComponentCore from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/Core";
import RNComponentBuiltIn from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/BuiltIn";
// Core Concepts - Components - End

import RNPropsState from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState";
import RNEventHandling from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/EventHandling";

import RNStylingBasics from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Basics";
import RNStylePropsBasics from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Basics";

import RNDeviceAPIs from "@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Features/DeviceAPIs";




const frameworkRoutes: RouteObject[] = [

// --------------- React Native > Basics > Fundamentals Start ---------------

{
    path: '/reactnative/basics/fundamentals/introduction',
    element: <RNIntro />,
},
{
    path: '/reactnative/basics/fundamentals/setup',
    element: <RNSetup />,
},
// --------------- React Native > Basics > Fundamentals End ---------------

// --------------- React Native > Basics > Core Concepts Start ---------------

{
    path: '/reactnative/basics/core/jsxtsx',
    element: <RNJSXTSX />,
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
{
    path: '/reactnative/basics/core/props-state',
    element: <RNPropsState />,
},
{
    path: '/reactnative/basics/core/events',
    element: <RNEventHandling />,
},
// --------------- React Native > Basics > Core Concepts > Styling > Start ---------------
{
path: '/reactnative/basics/core/styling/basics',
element: <RNStylingBasics />,
},

// --------------- React Native > Basics > Core Concepts > Styling > Properties Start ---------------
{
    path: '/reactnative/basics/core/styling/properties/basics',
    element: <RNStylePropsBasics />,
},

// --------------- React Native > Basics > Core Concepts > Styling > Properties End ---------------

// --------------- React Native > Basics > Core Concepts > Styling > End ---------------

// --------------- React Native Basics > Core Concepts End ---------------

// --------------- React Native Intermediate > Features ---------------
{
    path: '/reactnative/intermediate/native/deviceapis',
    element: <RNDeviceAPIs />,
}
// --------------- React Native Intermediate > Features End ---------------

];

export default frameworkRoutes;