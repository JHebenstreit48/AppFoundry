import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import frameworksNav from "@/Navigation/CombinedNav/CombinedNavTopics/frameworksNavCombined";
import enginesNav from "@/Navigation/CombinedNav/CombinedNavTopics/enginesNavCombined";
import languagesNav from "@/Navigation/CombinedNav/CombinedNavTopics/languagesNavCombined";
import resourcesNav from "@/Navigation/CombinedNav/CombinedNavTopics/resourcesNavCombined";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
frameworksNav,
enginesNav,
languagesNav,
resourcesNav
];

export default pages;