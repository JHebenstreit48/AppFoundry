import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts";
import Navigation from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/Navigation";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...Navigation,
];

export default Basics;
