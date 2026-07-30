import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics";
import Intermediate from "@/routes/Individual/Granularized/Frameworks/ReactNative/Intermediate";
import Advanced from "@/routes/Individual/Granularized/Frameworks/ReactNative/Advanced";
import Testing from "@/routes/Individual/Granularized/Frameworks/ReactNative/Testing";
import Tools from "@/routes/Individual/Granularized/Frameworks/ReactNative/Tools";

const ReactNative: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
  ...Testing,
  ...Tools,
];
export default ReactNative;
