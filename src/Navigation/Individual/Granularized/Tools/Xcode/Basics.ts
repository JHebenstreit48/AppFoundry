import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Installation & Command Line Tools',
          path: '/tools/xcode/basics/installation-clt'
        },
        {
          name: 'First Run & Updates',
          path: '/tools/xcode/basics/first-run-updates'
        }
      ]
    },
    {
      name: 'Simulators',
      subpages: [
        {
          name: 'Manage Runtimes & Devices',
          path: '/tools/xcode/basics/simulators/manage-runtimes'
        },
        {
          name: 'Custom Simulators & Resets',
          path: '/tools/xcode/basics/simulators/custom-and-reset'
        }
      ]
    }
  ]
};

export default Basics;