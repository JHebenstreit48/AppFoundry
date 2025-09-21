import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

// ---------------------------------- React Native Navigation Start ----------------------------------
import Basics from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Advanced';
import Testing from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Testing';
import Tools from '@/Navigation/Individual/Granularized/Frameworks/ReactNative/Tools';
// ----------------------------------- React Native Navigation End ------------------------------------

const frameworks: Subpage = {
  name: 'Frameworks',
  subpages: [
    {
      name: 'React Native',
      subpages: [
        Basics,
        Intermediate,
        Advanced,
        Testing,
        Tools
      ]
    }
  ]
};

export default frameworks;