import { RouteObject } from "react-router-dom";

import Expo from "@/routes/individual/modularized/Frameworks/ReactNative/Tools/Expo";
import ReactNativeCLI from "@/routes/individual/modularized/Frameworks/ReactNative/Tools/ReactNativeCLI";
import MetroBundler from "@/routes/individual/modularized/Frameworks/ReactNative/Tools/MetroBundler";
import AndroidStudio from "@/routes/individual/modularized/Frameworks/ReactNative/Tools/AndroidStudio";
import Xcode from "@/routes/individual/modularized/Frameworks/ReactNative/Tools/Xcode";

const Tools: RouteObject[] = [
  ...Expo,
  ...ReactNativeCLI,
  ...MetroBundler,
  ...AndroidStudio,
  ...Xcode,
];

export default Tools;
