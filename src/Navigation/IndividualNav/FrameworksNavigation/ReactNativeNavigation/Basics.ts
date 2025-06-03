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
          name: 'Setup',
          path: '/reactnative/basics/fundamentals/setup'
        },
        {
          name: 'Structure',
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
          name: 'Styling',
          path: '/reactnative/basics/core/styling'
        }
      ]
    },
    {
      name: 'State',
      subpages: [
        {
          name: 'useState & Hooks',
          path: '/reactnative/basics/state/hooks'
        },
        {
          name: 'Lifting State',
          path: '/reactnative/basics/state/lifting'
        },
        {
          name: 'Async Storage',
          path: '/reactnative/basics/state/storage'
        }
      ]
    },
    {
      name: 'Navigation',
      subpages: [
        {
          name: 'Stack Navigation',
          path: '/reactnative/basics/navigation/stack'
        },
        {
          name: 'Tab Navigation',
          path: '/reactnative/basics/navigation/tab'
        },
        {
          name: 'Drawer Navigation',
          path: '/reactnative/basics/navigation/drawer'
        }
      ]
    }
  ]
};

export default RNBasicsNavigation;
