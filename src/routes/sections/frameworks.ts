import { RouteObject } from "react-router-dom";

import JetpackCompose from "@/routes/individual/topics/Frameworks/jetpackCompose";
import ReactNative from "@/routes/individual/topics/Frameworks/reactNative";

const frameworks: RouteObject[] = [
  ...JetpackCompose,
  ...ReactNative,
];

export default frameworks;
