import { Subpage } from '@/Navigation/CombinedNav/Core/NavigationTypes';

import Components from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Sections/CoreConcepts/Components';
import JSXTSXEvent from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Sections/CoreConcepts/JSXTSXEvent';
import PropsState from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Sections/CoreConcepts/PropsState';
import Styling from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Sections/CoreConcepts/Styling';

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