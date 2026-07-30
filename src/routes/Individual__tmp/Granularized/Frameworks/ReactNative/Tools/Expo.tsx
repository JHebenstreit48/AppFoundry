import { RouteObject } from "react-router-dom";

import CLI from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools/Expo/CLI";
import ExpoGo from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools/Expo/ExpoGo";

const Expo: RouteObject[] = [
  ...CLI,
  ...ExpoGo,
];

export default Expo;
