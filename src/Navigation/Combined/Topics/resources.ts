import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

// ---------------------------------- React Native Resources Navigation Start ----------------------------------
import Basics from '@/Navigation/Individual/Resources/Frameworks/ReactNative/Basics';
// ----------------------------------- React Native Resources Navigation End ------------------------------------

const resourcesNav: Subpage = {
  name: 'Resources',
  subpages: [
    {
      name: 'Frameworks',
      subpages: [
        {
          name: 'React Native',
          subpages: [
            Basics,
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
