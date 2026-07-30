import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Frameworks/ReactNative/Testing/Basics";
import E2E from "@/routes/Individual/Granularized/Frameworks/ReactNative/Testing/E2E";

const Testing: RouteObject[] = [
  ...Basics,
  ...E2E,
];

export default Testing;
