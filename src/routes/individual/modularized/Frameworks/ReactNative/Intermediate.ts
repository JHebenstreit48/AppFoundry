import { RouteObject } from "react-router-dom";

import Navigation from "@/routes/individual/modularized/Frameworks/ReactNative/Intermediate/Navigation";
import Forms from "@/routes/individual/modularized/Frameworks/ReactNative/Intermediate/Forms";
import Features from "@/routes/individual/modularized/Frameworks/ReactNative/Intermediate/Features";

const Intermediate: RouteObject[] = [
  ...Navigation,
  ...Forms,
  ...Features,
];

export default Intermediate;
