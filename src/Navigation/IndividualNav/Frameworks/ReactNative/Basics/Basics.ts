import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Sections/Fundamentals';
import CoreConcepts from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Sections/CoreConcepts';
import Navigation from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Sections/Navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts,
    Navigation
  ]
};

export default Basics;