import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState/Fundamentals";
import AsyncAPIState from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState/AsyncAPIState";
import GlobalState from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState/GlobalState";

const PropsAndState: RouteObject[] = [
  ...Fundamentals,
  ...AsyncAPIState,
  ...GlobalState,
];

export default PropsAndState;
