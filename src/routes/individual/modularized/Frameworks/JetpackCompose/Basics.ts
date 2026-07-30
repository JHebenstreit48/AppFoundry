import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Frameworks/JetpackCompose/Basics/Fundamentals";
import Core from "@/routes/individual/modularized/Frameworks/JetpackCompose/Basics/Core";
import Styling from "@/routes/individual/modularized/Frameworks/JetpackCompose/Basics/Styling";
import Navigation from "@/routes/individual/modularized/Frameworks/JetpackCompose/Basics/Navigation";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Core,
  ...Styling,
  ...Navigation,
];

export default Basics;
