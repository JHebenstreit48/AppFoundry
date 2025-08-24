import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import frameworks from "@/Navigation/CombinedNav/CombinedNavTopics/frameworks";
import enginesNav from "@/Navigation/CombinedNav/CombinedNavTopics/enginesNavCombined";
import languagesNav from "@/Navigation/CombinedNav/CombinedNavTopics/languagesNavCombined";
import resourcesNav from "@/Navigation/CombinedNav/CombinedNavTopics/resourcesNavCombined";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
frameworks,
enginesNav,
languagesNav,
resourcesNav
];

export default pages;