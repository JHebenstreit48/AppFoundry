import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------------------------------- React Native Navigation Start ----------------------------------
import RNBasicsNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics';
import RNStateNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/State';
import RNFeaturesNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Features';
import RNFormsNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Forms';
import RNNavNavigation from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Navigate';
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
        RNStateNavigation,
        RNFeaturesNavigation,
        RNFormsNavigation,
        RNNavNavigation,
        RNAdvancedNavigation,
        RNTestingNavigation,
        RNToolsNavigation
      ]
    }
  ]
};

export default frameworksNav;
