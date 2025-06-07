import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import frameworksNav from "@/Navigation/CombinedNav/CombinedNavTopics/frameworksNavCombined";
import languagesNav from "@/Navigation/CombinedNav/CombinedNavTopics/languagesNavCombined";
import enginesNav from "@/Navigation/CombinedNav/CombinedNavTopics/enginesNavCombined";
import resourcesNav from "@/Navigation/CombinedNav/CombinedNavTopics/resourcesNavCombined";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
frameworksNav,
languagesNav,
enginesNav,
resourcesNav
];

export default pages;