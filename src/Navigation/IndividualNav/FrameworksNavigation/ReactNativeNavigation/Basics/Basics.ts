import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import RNCoreConceptsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/index';
import RNFundamentalsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/Fundamentals';
import RNStateNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/State';
import RNNavNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/Navigation';

const RNBasicsNav: Subpage = {
  name: 'Basics',
  subpages: [
    RNFundamentalsNav,
    RNCoreConceptsNav,
    RNStateNav,
    RNNavNav
  ]
};

export default RNBasicsNav;
