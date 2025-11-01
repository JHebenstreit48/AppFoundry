import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import AndroidStudio from '@/Navigation/Individual/Topics/Tools/AndroidStudio';
import Xcode from '@/Navigation/Individual/Topics/Tools/Xcode';

const tools: Subpage = {
  name: 'Tools',
  subpages: [
    AndroidStudio,
    Xcode
  ]
};

export default tools;