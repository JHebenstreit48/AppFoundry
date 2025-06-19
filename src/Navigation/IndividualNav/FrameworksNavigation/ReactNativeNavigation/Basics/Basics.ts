import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import RNCoreConceptsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/index';
import RNFundamentalsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/Fundamentals';
import RNNavNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/Navigation';

const RNBasicsNav: Subpage = {
  name: 'Basics',
  subpages: [
    RNFundamentalsNav,
    RNCoreConceptsNav,
    RNNavNav
  ]
};

export default RNBasicsNav;
