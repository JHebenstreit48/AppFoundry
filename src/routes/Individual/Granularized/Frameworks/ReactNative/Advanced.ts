import { RouteObject } from "react-router-dom";

import CICD from "@/routes/Individual/Granularized/Frameworks/ReactNative/Advanced/CICD";
import Performance from "@/routes/Individual/Granularized/Frameworks/ReactNative/Advanced/Performance";
import Native from "@/routes/Individual/Granularized/Frameworks/ReactNative/Advanced/Native";

const Advanced: RouteObject[] = [
  ...CICD,
  ...Performance,
  ...Native,
];

export default Advanced;
