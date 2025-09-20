import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Forms',
      subpages: [
        {
          name: 'Using Formik',
          path: '/react-native/intermediate/forms/formik'
        },
        {
          name: 'Yup Validation',
          path: '/react-native/intermediate/forms/yup-validation'
        },
        {
          name: 'Error Messages & Feedback',
          path: '/react-native/intermediate/forms/errors-and-feedback'
        },
        {
          name: 'Handling Inputs & Focus',
          path: '/react-native/intermediate/forms/inputs-and-focus'
        }
      ]
    },
    {
      name: 'Navigation',
      subpages: [
        {
          name: 'Conditional Routes',
          path: '/react-native/intermediate/navigation/conditional-routes'
        },
        {
          name: 'Deep Linking',
          path: '/react-native/intermediate/navigation/deep-linking'
        },
        {
          name: 'Navigation Performance',
          path: '/react-native/intermediate/navigation/performance'
        }
      ]
    },
    {
      name: 'State',
      subpages: [
        {
          name: 'Fetch & Axios',
          path: '/react-native/intermediate/state/fetch-and-axios'
        },
        {
          name: 'Managing API State',
          path: '/react-native/intermediate/state/api-state'
        }
      ]
    },
    {
      name: 'Features',
      subpages: [
        {
          name: 'Accessing Device APIs',
          path: '/react-native/intermediate/native/device-apis'
        },
        {
          name: 'Permissions',
          path: '/react-native/intermediate/native/permissions'
        },
        {
          name: 'Native Modules',
          path: '/react-native/intermediate/native/modules'
        }
      ]
    }
  ]
};

export default Intermediate;