import { RouteObject } from "react-router-dom";

import RNIntro from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/Fundamentals/RNIntro";
import RNSetup from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/Fundamentals/RNSetup";
import RNStructure from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/Fundamentals/RNStructure";

// Core Concepts - Start

// Core Concepts - JSX and TSX, Event Handling, Props and State Start
import RNJSXTSX from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/JSXAndTSX";
import RNEventHandling from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/EventHandling";
import RNPropsState from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState";
// Core Concepts - JSX and TSX, Event Handling, Props and State End

// Core Concepts - Components - Start
import RNComponentBasics from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/Basics";
import RNComponentCore from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/Core";
import RNComponentBuiltIn from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/ComponentsPages/BuiltIn";
// Core Concepts - Components - End

// Core Concepts - Styling - Start
import RNStylingBasics from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Basics";
import RNStylePropsBasics from "@/Pages/MainTabs/Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Basics";
// Core Concepts - Styling - End

// Core Concepts - End

// Intermediate - Start
import RNDeviceAPIs from "@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Features/DeviceAPIs";

// Intermediate - End

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
{
    path: '/reactnative/basics/fundamentals/structure',
    element: <RNStructure />,
},
// --------------- React Native > Basics > Fundamentals End ---------------

// --------------- React Native > Basics > Core Concepts Start ---------------

{
    path: '/reactnative/basics/core/jsxtsx',
    element: <RNJSXTSX />,
},
{
    path: '/reactnative/basics/core/eventhandling',
    element: <RNEventHandling />,
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