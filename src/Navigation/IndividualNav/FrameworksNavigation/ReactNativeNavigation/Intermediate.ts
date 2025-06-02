import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNIntermediateNavigation: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Forms',
      subpages: [
        {
          name: 'Using Formik',
          path: '/reactnative/intermediate/forms/formik'
        },
        {
          name: 'Yup Validation',
          path: '/reactnative/intermediate/forms/yup'
        },
        {
          name: 'Error Messages & Feedback',
          path: '/reactnative/intermediate/forms/errors'
        },
        {
          name: 'Handling Inputs & Focus',
          path: '/reactnative/intermediate/forms/focus'
        }
      ]
    },
    {
      name: 'Navigation',
      subpages: [
        {
          name: 'Conditional Routes',
          path: '/reactnative/intermediate/navigation/conditional'
        },
        {
          name: 'Deep Linking',
          path: '/reactnative/intermediate/navigation/linking'
        },
        {
          name: 'Navigation Performance',
          path: '/reactnative/intermediate/navigation/performance'
        }
      ]
    },
    {
      name: 'State Management',
      subpages: [
        {
          name: 'Fetch & Axios',
          path: '/reactnative/intermediate/state/fetch'
        },
        {
          name: 'Managing API State',
          path: '/reactnative/intermediate/state/apistate'
        }
      ]
    },
    {
      name: 'Native Features',
      subpages: [
        {
          name: 'Accessing Device APIs',
          path: '/reactnative/intermediate/native/deviceapis'
        },
        {
          name: 'Permissions',
          path: '/reactnative/intermediate/native/permissions'
        },
        {
          name: 'Native Modules',
          path: '/reactnative/intermediate/native/modules'
        }
      ]
    }
  ]
};

export default RNIntermediateNavigation;
