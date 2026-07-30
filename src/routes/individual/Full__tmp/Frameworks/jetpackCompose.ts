import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Basics";
import Advanced from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Advanced";

const JetpackCompose: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default JetpackCompose;
