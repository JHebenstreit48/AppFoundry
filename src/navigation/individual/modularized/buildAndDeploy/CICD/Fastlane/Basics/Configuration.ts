import type { Subpage } from '@/types/navigation';

const Configuration: Subpage = {
  name: 'Configuration',
  subpages: [
    {
      name: 'Fastfile Structure',
      path: '/build-and-deploy/ci-cd/fastlane/basics/configuration/fastfile-structure'
    },
    {
      name: 'Appfile Setup',
      path: '/build-and-deploy/ci-cd/fastlane/basics/configuration/appfile-setup'
    }
  ]
};

export default Configuration;