import { RouteObject } from "react-router-dom";

import RNBasicsResources from "@/Pages/MainTabs/ResourcesPages/Frameworks/ReactNative/Basics";

const reactNativeResourcesRoutes: RouteObject[] = [
  // --------------- React Native > Resources > Basics Start ---------------
  {
    path: '/resources/frameworks/reactnative/basics',
    element: <RNBasicsResources />,
  }
];

export default reactNativeResourcesRoutes;