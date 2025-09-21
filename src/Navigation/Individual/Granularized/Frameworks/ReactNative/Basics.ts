import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Fundamentals';
import CoreConcepts from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/CoreConcepts';
import Navigation from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics/Navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts,
    Navigation
  ]
};

export default Basics;