import { RouteObject } from "react-router-dom";

import Navigation from '@/routes/Individual/Granularized/Framework/ReactNative/Intermediate/Navigation';
import Features from '@/routes/Individual/Granularized/Framework/ReactNative/Intermediate/Features';
import Forms from '@/routes/Individual/Granularized/Framework/ReactNative/Intermediate/Forms';


const Basics: RouteObject[] = [
    ...Navigation,
    ...Features,
    ...Forms
];

export default Basics;