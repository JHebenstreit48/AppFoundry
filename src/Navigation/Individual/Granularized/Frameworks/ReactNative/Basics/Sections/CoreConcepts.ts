import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Components from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Sections/CoreConcepts/Components';
import JSXTSXEvent from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Sections/CoreConcepts/JSXTSXEvent';
import PropsState from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Sections/CoreConcepts/PropsState';
import Styling from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Sections/CoreConcepts/Styling';

const CoreConcepts: Subpage ={
    name: 'Core Concepts',
    subpages: [
        Components,
        JSXTSXEvent,
        PropsState,
        Styling
    ]
};

export default CoreConcepts;