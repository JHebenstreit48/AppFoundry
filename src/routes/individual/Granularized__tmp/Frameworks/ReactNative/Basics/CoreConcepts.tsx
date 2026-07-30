import { RouteObject } from "react-router-dom";

import Components from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts/Components";
import JSXTSXAndEventHandling from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent";
import PropsAndState from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState";
import Styling from "@/routes/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts/Styling";

const CoreConcepts: RouteObject[] = [
  ...Components,
  ...JSXTSXAndEventHandling,
  ...PropsAndState,
  ...Styling,
];

export default CoreConcepts;
