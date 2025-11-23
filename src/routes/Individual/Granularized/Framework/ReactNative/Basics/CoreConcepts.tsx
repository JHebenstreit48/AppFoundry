import { RouteObject } from 'react-router-dom';

import Components from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/CoreConcepts/Components';
import JSXTSXEvent from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/CoreConcepts/JSXTSXEvent';
import PropsAndState from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/CoreConcepts/PropsAndState';
import Styling from '@/routes/Individual/Granularized/Framework/ReactNative/Basics/CoreConcepts/Styling';

const CoreConcepts: RouteObject[] = [
    ...Components,
    ...JSXTSXEvent,
    ...PropsAndState,
    ...Styling
];

export default CoreConcepts;
