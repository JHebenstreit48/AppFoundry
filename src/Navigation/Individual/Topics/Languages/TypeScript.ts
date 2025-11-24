import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Languages/TypeScript/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/TypeScript/Advanced';
const TypeScript: Subpage = {
  name: 'TypeScript',
  subpages: [
    Basics,
    Advanced
  ],
};

export default TypeScript;