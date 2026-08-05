import type { Subpage } from '@/types/navigation';

const CIIntegration: Subpage = {
  name: 'CI Integration',
  subpages: [
    {
      name: 'GitHub Actions',
      path: '/build-and-deploy/ci-cd/fastlane/advanced/ci-integration/github-actions'
    },
    {
      name: 'Bitrise Integration',
      path: '/build-and-deploy/ci-cd/fastlane/advanced/ci-integration/bitrise-integration'
    }
  ]
};

export default CIIntegration;