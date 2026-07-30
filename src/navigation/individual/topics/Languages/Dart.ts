import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/Dart/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/Dart/Advanced';
const Dart: Subpage = {
  name: 'Dart',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Dart;