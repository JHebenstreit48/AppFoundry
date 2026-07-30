import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/Xcode/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/Xcode/Advanced';

const Xcode: Subpage = {
  name: 'Xcode',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Xcode;