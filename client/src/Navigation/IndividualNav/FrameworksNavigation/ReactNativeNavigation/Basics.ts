import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "What is React Native?", path: "/reactnative/basics/intro/whatis" },
        { name: "Use Cases & Benefits", path: "/reactnative/basics/intro/benefits" },
        { name: "Project Setup", path: "/reactnative/basics/intro/setup" },
        { name: "Folder Structure", path: "/reactnative/basics/intro/structure" }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "JSX & TSX", path: "/reactnative/basics/core/jsx-tsx" },
        { name: "Props & State", path: "/reactnative/basics/core/props-state" },
        { name: "Event Handling", path: "/reactnative/basics/core/events" },
        { name: "StyleSheet API", path: "/reactnative/basics/core/styling" }
      ]
    }
  ]
};

export default RNBasicsNavigation;
