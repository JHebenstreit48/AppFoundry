import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Frameworks/SwiftUI/Basics';
import Advanced from '@/navigation/individual/modularized/Frameworks/SwiftUI/Advanced';
const SwiftUI: Subpage = {
  name: 'SwiftUI',
  subpages: [
    Basics,
    Advanced
  ],
};

export default SwiftUI;