import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Basics/Fundamentals";
import Core from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Basics/Core";
import Styling from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Basics/Styling";
import Navigation from "@/routes/Individual/Granularized/Frameworks/JetpackCompose/Basics/Navigation";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Core,
  ...Styling,
  ...Navigation,
];

export default Basics;
