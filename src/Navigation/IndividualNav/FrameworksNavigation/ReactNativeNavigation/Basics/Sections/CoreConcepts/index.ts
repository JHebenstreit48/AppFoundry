import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import RNJSXTSXNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/JSXAndTSX';
import RNComponentsNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Components';
import RNStylingNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/Styling';
import RNPropsStateNav from '@/Navigation/IndividualNav/FrameworksNavigation/ReactNativeNavigation/Basics/Sections/CoreConcepts/PropsStateEvent';

const RNCoreConceptsNav: Subpage = {
  name: 'Core Concepts',
  subpages: [
    ...RNJSXTSXNav,
    RNComponentsNav,
    RNPropsStateNav,
    RNStylingNav
  ]
};

export default RNCoreConceptsNav;
