import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/Java/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/Java/Advanced';
const Java: Subpage = {
  name: 'Java',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Java;