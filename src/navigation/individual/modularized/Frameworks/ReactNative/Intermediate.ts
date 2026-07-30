import type { Subpage } from '@/types/navigation';

import Navigation from '@/navigation/individual/modularized/Frameworks/ReactNative/Intermediate/Navigation';
import Forms from '@/navigation/individual/modularized/Frameworks/ReactNative/Intermediate/Forms';
import Features from '@/navigation/individual/modularized/Frameworks/ReactNative/Intermediate/Features';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    Navigation,
    Forms,
    Features
  ]
};

export default Intermediate;