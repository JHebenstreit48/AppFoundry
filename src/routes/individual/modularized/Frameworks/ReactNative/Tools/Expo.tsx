import { RouteObject } from "react-router-dom";

import CLI from "@/routes/individual/modularized/Frameworks/ReactNative/Tools/Expo/CLI";
import ExpoGo from "@/routes/individual/modularized/Frameworks/ReactNative/Tools/Expo/ExpoGo";

const Expo: RouteObject[] = [
  ...CLI,
  ...ExpoGo,
];

export default Expo;
