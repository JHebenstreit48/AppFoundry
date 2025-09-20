import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Sections/Fundamentals';
import CoreConcepts from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Sections/CoreConcepts';
import Navigation from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Sections/Navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts,
    Navigation
  ]
};

export default Basics;