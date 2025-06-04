import { RouteObject } from "react-router-dom";

import RNIntro from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/Fundamentals/RNIntro";
import RNSetup from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/Fundamentals/RNSetup";

import RNJSXTSX from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/JSXAndTSX";
import RNComponents from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Components";
import RNPropsState from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState";
import RNEventHandling from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/EventHandling";
import RNStyling from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling";

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
{
    path: '/reactnative/basics/core/components',
    element: <RNComponents />
},
{
    path: '/reactnative/basics/core/props-state',
    element: <RNPropsState />,
},
{
    path: '/reactnative/basics/core/events',
    element: <RNEventHandling />,
},
{
    path: '/reactnative/basics/core/styling',
    element: <RNStyling />,
},
// --------------- React Native Basics > Core Concepts End ---------------

// --------------- React Native Intermediate > Features ---------------
{
    path: '/reactnative/intermediate/native/deviceapis',
    element: <RNDeviceAPIs />,
}
// --------------- React Native Intermediate > Features End ---------------

];

export default frameworkRoutes;