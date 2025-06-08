import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import RNCoreConceptsMainNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Main';
import RNComponentsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Components';
import RNStylingNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Styling';

const RNCoreConceptsNav: Subpage = {
  name: 'Core Concepts',
  subpages: [
    ...RNCoreConceptsMainNav,
    RNComponentsNav,
    RNStylingNav
  ]
};

export default RNCoreConceptsNav;
