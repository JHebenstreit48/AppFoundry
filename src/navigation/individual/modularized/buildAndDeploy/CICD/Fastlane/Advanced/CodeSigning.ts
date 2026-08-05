import type { Subpage } from '@/types/navigation';

const CodeSigning: Subpage = {
  name: 'Code Signing',
  subpages: [
    {
      name: 'Match Overview',
      path: '/build-and-deploy/ci-cd/fastlane/advanced/code-signing/match-overview'
    },
    {
      name: 'Managing Certificates',
      path: '/build-and-deploy/ci-cd/fastlane/advanced/code-signing/managing-certificates'
    }
  ]
};

export default CodeSigning;