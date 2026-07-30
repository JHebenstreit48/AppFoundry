import { RouteObject } from "react-router-dom";

import StateAndSideEffects from "@/routes/individual/modularized/Frameworks/JetpackCompose/Advanced/StateAndSideEffects";
import Performance from "@/routes/individual/modularized/Frameworks/JetpackCompose/Advanced/Performance";
import Interop from "@/routes/individual/modularized/Frameworks/JetpackCompose/Advanced/Interop";
import BuildAndConfig from "@/routes/individual/modularized/Frameworks/JetpackCompose/Advanced/BuildAndConfig";

const Advanced: RouteObject[] = [
  ...StateAndSideEffects,
  ...Performance,
  ...Interop,
  ...BuildAndConfig,
];

export default Advanced;
