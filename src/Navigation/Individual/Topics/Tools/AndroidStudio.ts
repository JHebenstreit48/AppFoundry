import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/AndroidStudio/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/AndroidStudio/Advanced';

const AndroidStudio: Subpage = {
  name: 'Android Studio',
  subpages: [
    Basics,
    Advanced
  ],
};

export default AndroidStudio;