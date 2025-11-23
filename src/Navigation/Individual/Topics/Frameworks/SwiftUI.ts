import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Frameworks/SwiftUI/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Frameworks/SwiftUI/Advanced';
const SwiftUI: Subpage = {
  name: 'SwiftUI',
  subpages: [
    Basics,
    Advanced
  ],
};

export default SwiftUI;