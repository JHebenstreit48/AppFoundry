import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Frameworks/JetpackCompose/Basics';
import Advanced from '@/navigation/individual/modularized/Frameworks/JetpackCompose/Advanced';

const JetpackCompose: Subpage = {
  name: 'Jetpack Compose',
  subpages: [
    Basics,
    Advanced
  ],
};

export default JetpackCompose;