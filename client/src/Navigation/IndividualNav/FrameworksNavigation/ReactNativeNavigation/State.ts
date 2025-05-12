import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNStateNavigation: Subpage = {
  name: "State",
  subpages: [
    {
      name: "State Basics",
      subpages: [
        { name: "useState & Hooks", path: "/reactnative/state/basics/hooks" },
        { name: "State Lifting", path: "/reactnative/state/basics/lifting" },
        { name: "Async Storage", path: "/reactnative/state/basics/storage" }
      ]
    },
    {
      name: "API & Networking",
      subpages: [
        { name: "Fetch & Axios", path: "/reactnative/state/api/fetch" },
        { name: "Managing API State", path: "/reactnative/state/api/state" }
      ]
    },
    {
      name: "Advanced State Tools",
      subpages: [
        { name: "Context API", path: "/reactnative/state/advanced/context" },
        { name: "Redux Integration", path: "/reactnative/state/advanced/redux" }
      ]
    }
  ]
};

export default RNStateNavigation;
