import { RouteObject } from "react-router-dom";

import Foundations from "@/routes/individual/modularized/Frameworks/JetpackCompose/Basics/Styling/Foundations";
import Properties from "@/routes/individual/modularized/Frameworks/JetpackCompose/Basics/Styling/Properties";

const Styling: RouteObject[] = [
  ...Foundations,
  ...Properties,
];

export default Styling;
