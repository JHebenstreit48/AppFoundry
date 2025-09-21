import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const PropsState: Subpage = {
  name: 'Props & State',
  subpages: [
    {
      name: 'Props',
      path: '/react-native/basics/core/props-and-state/props',
    },
    {
      name: 'State',
      path: '/react-native/basics/core/props-and-state/state',
    },
    {
      name: 'Async/API State',
      subpages: [
        {
          name: 'Fetch & Axios',
          path: '/react-native/intermediate/state/fetch-and-axios',
        },
        {
          name: 'Managing API State',
          path: '/react-native/intermediate/state/api-state',
        },
      ],
    },
    {
      name: 'Context',
      subpages: [
        {
          name: 'Context API',
          path: '/react-native/advanced/state/context',
        },
        {
          name: 'Providers & Performance',
          path: '/react-native/advanced/state/context/providers-and-performance',
        },
      ],
    },
    {
      name: 'Redux (React Native)',
      subpages: [
        {
          name: 'RTK & RTK Query (RN)',
          path: '/react-native/basics/core/props-and-state/redux-react-native/rtk-and-rtk-query',
        },
        {
          name: 'Persist & Offline (RN)',
          path: '/react-native/basics/core/props-and-state/redux-react-native/persist-and-offline',
        },
      ],
    },
  ],
};

export default PropsState;