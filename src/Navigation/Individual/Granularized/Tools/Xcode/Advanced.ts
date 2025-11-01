import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Signing & Distribution',
      subpages: [
        {
          name: 'Certificates & Provisioning Profiles',
          path: '/tools/xcode/advanced/signing/certs-profiles'
        },
        {
          name: 'Schemes & Build Settings',
          path: '/tools/xcode/advanced/signing/schemes-build'
        },
      ],
    },
    {
      name: 'Diagnostics',
      subpages: [
        {
          name: 'Device Logs & Crash Reports',
          path: '/tools/xcode/advanced/diagnostics/device-logs-crashes'
        },
        {
          name: 'Instruments Profiling',
          path: '/tools/xcode/advanced/diagnostics/instruments'
        },
      ],
    },
  ],
};

export default Advanced;