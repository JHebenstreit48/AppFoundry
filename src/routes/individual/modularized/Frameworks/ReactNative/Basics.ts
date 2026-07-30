import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/Fundamentals";
import CoreConcepts from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts";
import Navigation from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/Navigation";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...Navigation,
];

export default Basics;
