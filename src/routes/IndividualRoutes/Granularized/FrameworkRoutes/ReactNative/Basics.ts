import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/IndividualRoutes/Granularized/FrameworkRoutes/ReactNative/Basics/Fundamentals';
import JSXTSXEvent from "@/routes/IndividualRoutes/Granularized/FrameworkRoutes/ReactNative/Basics/JSXTSXEvent";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...JSXTSXEvent,
];

export default Basics;