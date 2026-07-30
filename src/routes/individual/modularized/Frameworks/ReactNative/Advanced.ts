import { RouteObject } from "react-router-dom";

import CICD from "@/routes/individual/modularized/Frameworks/ReactNative/Advanced/CICD";
import Performance from "@/routes/individual/modularized/Frameworks/ReactNative/Advanced/Performance";
import Native from "@/routes/individual/modularized/Frameworks/ReactNative/Advanced/Native";

const Advanced: RouteObject[] = [
  ...CICD,
  ...Performance,
  ...Native,
];

export default Advanced;
