import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------------------------------- React Native Navigation Start ----------------------------------
import RNBasicsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Basics';
import RNIntermediateNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Intermediate/Intermediate';
import RNAdvancedNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Advanced/Advanced';
import RNTestingNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/TestingNav/Testing';
import RNToolsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/ToolsNav/Tools';
// ----------------------------------- React Native Navigation End ------------------------------------

const frameworksNav: Page = {
  name: 'Frameworks',
  subpages: [
    {
      name: 'React Native',
      subpages: [
        RNBasicsNav,
        RNIntermediateNav,
        RNAdvancedNav,
        RNTestingNav,
        RNToolsNav
      ]
    }
  ]
};

export default frameworksNav;
