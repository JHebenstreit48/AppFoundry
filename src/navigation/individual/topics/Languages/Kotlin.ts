import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/Kotlin/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/Kotlin/Advanced';
const Kotlin: Subpage = {
  name: 'Kotlin',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Kotlin;