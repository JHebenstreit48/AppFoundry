import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------------------------------- React Native Navigation Start ----------------------------------
import RNBasicsNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics';
import RNAdvancedNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Advanced';
import RNTestingNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Testing';
import RNToolsNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Tools';
// ----------------------------------- React Native Navigation End ------------------------------------

const frameworksNav: Page = {
  name: 'Frameworks',
  subpages: [
    {
      name: 'React Native',
      subpages: [
        RNBasicsNavigation,
        RNAdvancedNavigation,
        RNTestingNavigation,
        RNToolsNavigation
      ]
    }
  ]
};

export default frameworksNav;
