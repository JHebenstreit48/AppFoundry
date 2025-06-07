import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------------------------------- React Native Navigation Start ----------------------------------
// ----------------------------------- React Native Navigation End ------------------------------------

const resourcesNav: Page = {
  name: 'Resources',
  subpages: [
    {
      name: 'Frameworks',
      subpages: [
        {
          name: 'React Native',
          subpages: [
            // RNBasicsResourcesNavigation,
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
