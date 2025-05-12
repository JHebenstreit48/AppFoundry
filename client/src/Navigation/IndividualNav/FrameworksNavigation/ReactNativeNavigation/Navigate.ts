import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNNavigateNavigation: Subpage = {
  name: "Navigation",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Stack Navigation", path: "/reactnative/navigation/stack" },
        { name: "Tab Navigation", path: "/reactnative/navigation/tab" },
        { name: "Drawer Navigation", path: "/reactnative/navigation/drawer" }
      ]
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Conditional Routes", path: "/reactnative/navigation/advanced/conditional" },
        { name: "Deep Linking", path: "/reactnative/navigation/advanced/linking" },
        { name: "Navigation Performance", path: "/reactnative/navigation/advanced/performance" }
      ]
    }
  ]
};

export default RNNavigateNavigation;
