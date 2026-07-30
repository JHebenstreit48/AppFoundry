import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Frameworks/ReactNative/Basics";
import Intermediate from "@/routes/individual/modularized/Frameworks/ReactNative/Intermediate";
import Advanced from "@/routes/individual/modularized/Frameworks/ReactNative/Advanced";
import Testing from "@/routes/individual/modularized/Frameworks/ReactNative/Testing";
import Tools from "@/routes/individual/modularized/Frameworks/ReactNative/Tools";

const ReactNative: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
  ...Testing,
  ...Tools,
];
export default ReactNative;
