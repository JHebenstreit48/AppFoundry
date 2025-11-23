import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/Framework/ReactNative/Basics';
import Intermediate from '@/routes/Individual/Granularized/Framework/ReactNative/Intermediate';
import Tools from '@/routes/Individual/Granularized/Framework/ReactNative/Tools';

const ReactNative: RouteObject[] = [
    ...Basics,
    ...Intermediate,
    ...Tools,
];

export default ReactNative;