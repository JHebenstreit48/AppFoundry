import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/Fundamentals';
import CoreConcepts from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/CoreConcepts';
import Navigation from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/Navigation';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
    ...Navigation
];

export default Basics;