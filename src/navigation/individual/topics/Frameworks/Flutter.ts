import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Frameworks/Flutter/Basics';
import Advanced from '@/navigation/individual/modularized/Frameworks/Flutter/Advanced';

const Flutter: Subpage = {
  name: 'Flutter',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Flutter;