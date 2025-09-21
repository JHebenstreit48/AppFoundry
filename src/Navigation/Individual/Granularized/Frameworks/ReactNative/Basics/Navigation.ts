import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Navigation: Subpage = {
  name: 'Navigation',
  subpages: [
    {
      name: 'Stack',
      path: '/react-native/basics/navigation/stack'
    },
    {
      name: 'Tab',
      path: '/react-native/basics/navigation/tab'
    },
    {
      name: 'Drawer',
      path: '/react-native/basics/navigation/drawer'
    },
    {
      name: "Conditional Routes",
      path: "/react-native/intermediate/navigation/conditional-routes"
    },
    {
      name: "Deep Linking",
      path: "/react-native/intermediate/navigation/deep-linking"
    },
    {
      name: "Navigation Performance",
      path: "/react-native/intermediate/navigation/performance"
    }
  ]
};

export default Navigation;