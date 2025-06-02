import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNAdvancedNavigation: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "CI/CD",
      subpages: [
        { name: "Debugging & Testing", path: "/reactnative/advanced/build/debugging" },
        { name: "CI/CD Pipelines", path: "/reactnative/advanced/build/cicd" },
        { name: "Environment Variables", path: "/reactnative/advanced/build/env" }
      ]
    },
    {
      name: "Performance",
      subpages: [
        { name: "Handling Large Lists", path: "/reactnative/advanced/performance/lists" },
        { name: "Animations & Gestures", path: "/reactnative/advanced/performance/animations" },
        { name: "Memory Optimization", path: "/reactnative/advanced/performance/memory" }
      ]
    },
    {
      name: "Native",
      subpages: [
        { name: "Custom Code", path: "/reactnative/advanced/native/customcode" },
        { name: "Bridging", path: "/reactnative/advanced/native/bridging" }
      ]
    },
    {
      name: "State",
      subpages: [
        { name: "Context API", path: "/reactnative/advanced/state/context" },
        { name: "Redux", path: "/reactnative/advanced/state/redux" }
      ]
    }
  ]
};

export default RNAdvancedNavigation;
