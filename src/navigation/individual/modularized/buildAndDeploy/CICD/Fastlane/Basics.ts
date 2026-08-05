import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Basics/Fundamentals';
import Configuration from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Basics/Configuration';
import Lanes from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Basics/Lanes';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Configuration,
    Lanes
  ]
};

export default Basics;