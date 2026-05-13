import { RouteObject } from "react-router-dom";

import StateAndSideEffects from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Advanced/StateAndSideEffects";
import Performance from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Advanced/Performance";
import Interop from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Advanced/Interop";
import BuildAndConfig from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Advanced/BuildAndConfig";

const Advanced: RouteObject[] = [
  ...StateAndSideEffects,
  ...Performance,
  ...Interop,
  ...BuildAndConfig,
];

export default Advanced;
