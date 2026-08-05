import type { Subpage } from '@/types/navigation';

import Fastlane from '@/navigation/individual/topics/buildAndDeploy/CICD/Fastlane';

const CICD: Subpage = {
  name: 'CI/CD',
  subpages: [
    Fastlane
  ],
};

export default CICD;