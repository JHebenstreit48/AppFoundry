import type { Subpage } from '@/types/navigation';

import CodeSigning from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Advanced/CodeSigning';
import CIIntegration from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Advanced/CIIntegration';
import CustomActions from '@/navigation/individual/modularized/buildAndDeploy/CICD/Fastlane/Advanced/CustomActions';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    CodeSigning,
    CIIntegration,
    CustomActions
  ]
};

export default Advanced;