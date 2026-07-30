import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/AndroidStudio/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/AndroidStudio/Advanced';

const AndroidStudio: Subpage = {
  name: 'Android Studio',
  subpages: [
    Basics,
    Advanced
  ],
};

export default AndroidStudio;