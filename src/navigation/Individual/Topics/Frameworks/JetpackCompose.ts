import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Frameworks/JetpackCompose/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Frameworks/JetpackCompose/Advanced';

const JetpackCompose: Subpage = {
  name: 'Jetpack Compose',
  subpages: [
    Basics,
    Advanced
  ],
};

export default JetpackCompose;