import { RouteObject } from "react-router-dom";

import JetpackCompose from "@/routes/Individual/Full/Frameworks/jetpackCompose";
import ReactNative from "@/routes/Individual/Full/Frameworks/reactNative";

const frameworks: RouteObject[] = [
  ...JetpackCompose,
  ...ReactNative,
];

export default frameworks;
