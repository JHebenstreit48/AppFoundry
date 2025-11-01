import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/Framework/ReactNative/Basics';
import Tools from '@/routes/Individual/Granularized/Framework/ReactNative/Tools';

const ReactNative: RouteObject[] = [
    ...Basics,
    ...Tools,
];

export default ReactNative;