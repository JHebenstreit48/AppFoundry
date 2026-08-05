import type { Subpage } from '@/types/navigation';

import CICD from '@/navigation/individual/topics/buildAndDeploy/CICD';

const buildAndDeploy: Subpage = {
  name: 'Build & Deploy',
  subpages: [
    CICD
  ]
};

export default buildAndDeploy;