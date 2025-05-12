import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNFeaturesNavigation: Subpage = {
  name: "Native Features",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Accessing Device APIs", path: "/reactnative/native/deviceapis" },
        { name: "Permissions", path: "/reactnative/native/permissions" },
        { name: "Native Modules", path: "/reactnative/native/modules" }
      ]
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Custom Native Code", path: "/reactnative/native/advanced/nativecode" },
        { name: "Bridging", path: "/reactnative/native/advanced/bridging" }
      ]
    }
  ]
};

export default RNFeaturesNavigation;
