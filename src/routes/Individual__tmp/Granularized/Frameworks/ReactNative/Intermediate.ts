import { RouteObject } from "react-router-dom";

import Navigation from "@/routes/Individual/Granularized/Frameworks/ReactNative/Intermediate/Navigation";
import Forms from "@/routes/Individual/Granularized/Frameworks/ReactNative/Intermediate/Forms";
import Features from "@/routes/Individual/Granularized/Frameworks/ReactNative/Intermediate/Features";

const Intermediate: RouteObject[] = [
  ...Navigation,
  ...Forms,
  ...Features,
];

export default Intermediate;
