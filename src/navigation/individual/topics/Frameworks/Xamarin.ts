import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Frameworks/Xamarin/Basics';
import Advanced from '@/navigation/individual/modularized/Frameworks/Xamarin/Advanced';
const Xamarin: Subpage = {
  name: 'Xamarin',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Xamarin;