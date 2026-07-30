import { RouteObject } from "react-router-dom";

import BasicsResources from "@/pages/mainTabs/Resources/Frameworks/ReactNative/Basics";

const reactNativeResourcesRoutes: RouteObject[] = [
  // --------------- React Native > Resources > Basics Start ---------------
  {
    path: '/resources/frameworks/react-native/basics',
    element: <BasicsResources />,
  }
];

export default reactNativeResourcesRoutes;