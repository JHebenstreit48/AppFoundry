import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import RNCoreConceptsMainNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Main';
import RNComponentsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Components';
import RNStylingNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Styling';
import RNPropsStateNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/PropsAndState';

const RNCoreConceptsNav: Subpage = {
  name: 'Core Concepts',
  subpages: [
    ...RNCoreConceptsMainNav,
    RNComponentsNav,
    RNPropsStateNav,
    RNStylingNav
  ]
};

export default RNCoreConceptsNav;
