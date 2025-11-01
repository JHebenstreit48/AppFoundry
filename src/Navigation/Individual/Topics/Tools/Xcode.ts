import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/Xcode/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/Xcode/Advanced';

const Xcode: Subpage = {
  name: 'Xcode',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Xcode;