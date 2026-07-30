import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Frameworks/JetpackCompose/Basics";
import Advanced from "@/routes/individual/modularized/Frameworks/JetpackCompose/Advanced";

const JetpackCompose: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default JetpackCompose;
