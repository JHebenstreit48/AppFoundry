import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/TypeScript/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/TypeScript/Advanced';
const TypeScript: Subpage = {
  name: 'TypeScript',
  subpages: [
    Basics,
    Advanced
  ],
};

export default TypeScript;