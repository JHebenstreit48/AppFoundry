import { RouteObject } from "react-router-dom";

import Components from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts/Components";
import JSXTSXAndEventHandling from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent";
import PropsAndState from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts/PropsAndState";
import Styling from "@/routes/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts/Styling";

const CoreConcepts: RouteObject[] = [
  ...Components,
  ...JSXTSXAndEventHandling,
  ...PropsAndState,
  ...Styling,
];

export default CoreConcepts;
