import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

// ---------------------------------- React Native Navigation Start ----------------------------------
import Basics from '@/Navigation/Individual/Frameworks/ReactNative/Basics';
import Intermediate from '@/Navigation/Individual/Frameworks/ReactNative/Intermediate';
import Advanced from '@/Navigation/Individual/Frameworks/ReactNative/Advanced';
import Testing from '@/Navigation/Individual/Frameworks/ReactNative/Testing';
import Tools from '@/Navigation/Individual/Frameworks/ReactNative/Tools';
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