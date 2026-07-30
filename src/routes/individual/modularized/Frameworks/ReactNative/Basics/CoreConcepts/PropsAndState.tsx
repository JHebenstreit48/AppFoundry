import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState/Fundamentals";
import AsyncAPIState from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState/AsyncAPIState";
import GlobalState from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState/GlobalState";

const PropsAndState: RouteObject[] = [
  ...Fundamentals,
  ...AsyncAPIState,
  ...GlobalState,
];

export default PropsAndState;
