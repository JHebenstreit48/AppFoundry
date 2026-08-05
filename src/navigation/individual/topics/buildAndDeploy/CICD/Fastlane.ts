import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Basics';
import Advanced from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Advanced';

const Fastlane: Subpage = {
  name: 'Fastlane',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Fastlane;