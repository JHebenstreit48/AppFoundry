import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNBasicsNavigation: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/reactnative/basics/fundamentals/introduction'
        },
        {
          name: 'Use Cases & Benefits',
          path: '/reactnative/basics/fundamentals/benefits'
        },
        { name: 'Project Setup', path: '/reactnative/basics/fundamentals/setup' },
        {
          name: 'Folder Structure',
          path: '/reactnative/basics/fundamentals/structure'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'JSX & TSX',
          path: '/reactnative/basics/core/jsx-tsx'
        },
        {
          name: 'Props & State',
          path: '/reactnative/basics/core/props-state'
        },
        {
          name: 'Event Handling',
          path: '/reactnative/basics/core/events'
        },
        {
          name: 'StyleSheet API',
          path: '/reactnative/basics/core/styling'
        }
      ]
    }
  ]
};

export default RNBasicsNavigation;
