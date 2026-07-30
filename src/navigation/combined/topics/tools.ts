import type { Subpage } from '@/types/navigation';

import AndroidStudio from '@/navigation/individual/topics/Tools/AndroidStudio';
import Xcode from '@/navigation/individual/topics/Tools/Xcode';

const tools: Subpage = {
  name: 'Tools',
  subpages: [
    AndroidStudio,
    Xcode
  ]
};

export default tools;