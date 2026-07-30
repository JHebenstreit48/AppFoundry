import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Frameworks/ReactNative/Basics';
import Intermediate from '@/navigation/individual/modularized/Frameworks/ReactNative/Intermediate';
import Advanced from '@/navigation/individual/modularized/Frameworks/ReactNative/Advanced';
import Testing from '@/navigation/individual/modularized/Frameworks/ReactNative/Testing';
import Tools from '@/navigation/individual/modularized/Frameworks/ReactNative/Tools';

const ReactNative: Subpage = {
  name: 'React Native',
  subpages: [
    Basics,
    Intermediate,
    Advanced,
    Testing,
    Tools
  ],
};

export default ReactNative;