import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Frameworks/ReactNative/Basics/Fundamentals';
import CoreConcepts from '@/navigation/individual/modularized/Frameworks/ReactNative/Basics/CoreConcepts';
import Navigation from '@/navigation/individual/modularized/Frameworks/ReactNative/Basics/Navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts,
    Navigation
  ]
};

export default Basics;