import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------------------------------- React Native Resources Navigation Start ----------------------------------
import RNBasicsResourcesNavigation from '@/Navigation/IndividualNav/ResourcesNavigation/Frameworks/ReactNative/Basics';
// ----------------------------------- React Native Resources Navigation End ------------------------------------

const resourcesNav: Page = {
  name: 'Resources',
  subpages: [
    {
      name: 'Frameworks',
      subpages: [
        {
          name: 'React Native',
          subpages: [
            RNBasicsResourcesNavigation,
            // RNIntermediateResourcesNavigation,
            // RNAdvancedResourcesNavigation,
            // RNTestingResourcesNavigation,
            // RNToolsResourcesNavigation
          ],
        },
      ],
    }
  ]
};

export default resourcesNav;
