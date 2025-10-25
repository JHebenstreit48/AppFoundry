import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/Fundamentals';
import JSXTSXEvent from "@/routes/Individual/Granularized/Framework/ReactNative/Basics/JSXTSXEvent";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...JSXTSXEvent,
];

export default Basics;