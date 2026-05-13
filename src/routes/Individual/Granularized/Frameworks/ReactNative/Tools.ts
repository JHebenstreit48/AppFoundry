import { RouteObject } from "react-router-dom";

import Expo from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools/Expo";
import ReactNativeCLI from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools/ReactNativeCLI";
import MetroBundler from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools/MetroBundler";
import AndroidStudio from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools/AndroidStudio";
import Xcode from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools/Xcode";

const Tools: RouteObject[] = [
  ...Expo,
  ...ReactNativeCLI,
  ...MetroBundler,
  ...AndroidStudio,
  ...Xcode,
];

export default Tools;
