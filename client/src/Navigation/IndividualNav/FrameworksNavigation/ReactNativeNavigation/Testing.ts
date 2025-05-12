import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNTestingNavigation: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Unit Testing with Jest", path: "/reactnative/testing/jest" },
        { name: "Testing Components", path: "/reactnative/testing/components" }
      ]
    },
    {
      name: "End-to-End Testing",
      subpages: [
        { name: "Detox Overview", path: "/reactnative/testing/e2e/detox" },
        { name: "Simulators & Real Devices", path: "/reactnative/testing/e2e/devices" }
      ]
    }
  ]
};

export default RNTestingNavigation;
