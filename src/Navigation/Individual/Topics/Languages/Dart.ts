import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Languages/Dart/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/Dart/Advanced';
const Dart: Subpage = {
  name: 'Dart',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Dart;