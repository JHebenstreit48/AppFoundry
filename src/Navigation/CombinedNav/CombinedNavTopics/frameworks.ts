import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------------------------------- React Native Navigation Start ----------------------------------
import Basics from '@/Navigation/IndividualNav/Frameworks/ReactNative/Basics/Basics';
import Intermediate from '@/Navigation/IndividualNav/Frameworks/ReactNative/Intermediate/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Frameworks/ReactNative/Advanced/Advanced';
import Testing from '@/Navigation/IndividualNav/Frameworks/ReactNative/TestingNav/Testing';
import Tools from '@/Navigation/IndividualNav/Frameworks/ReactNative/ToolsNav/Tools';
// ----------------------------------- React Native Navigation End ------------------------------------

const frameworks: Page = {
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