import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const RNToolsNavigation: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'Expo',
      subpages: [
        {
          name: 'CLI',
          subpages: [
            {
              name: 'Overview',
              path: '/reactnative/tools/expo/cli/overview'
            },
            {
              name: 'Workflow',
              path: '/reactnative/tools/expo/cli/workflow'
            },
            {
              name: 'Ejecting',
              path: '/reactnative/tools/expo/cli/eject'
            }
          ]
        },
        {
          name: 'Expo Go',
          subpages: [
            {
              name: 'Installing/Running',
              path: '/reactnative/tools/expo/go/install'
            },
            {
              name: 'Previewing',
              path: '/reactnative/tools/expo/go/preview'
            },
            {
              name: 'QR Codes/Testing',
              path: '/reactnative/tools/expo/go/qr'
            }
          ]
        }
      ]
    },
    {
      name: 'React Native CLI',
      subpages: [
        {
          name: 'Overview',
          path: '/reactnative/tools/rncli/overview'
        },
        {
          name: 'Setup',
          path: '/reactnative/tools/rncli/setup'
        },
        {
          name: 'Running Apps',
          path: '/reactnative/tools/rncli/running'
        }
      ]
    },
    {
      name: 'Metro Bundler',
      subpages: [
        {
          name: 'Overview',
          path: '/reactnative/tools/metro/overview'
        },
        {
          name: 'Manual Access/Commands',
          path: '/reactnative/tools/metro/usage'
        }
      ]
    },
    {
      name: 'Android Studio',
      subpages: [
        {
          name: 'Installation/SDK',
          path: '/reactnative/tools/androidstudio/installation'
        },
        {
          name: 'Virtual Devices (AVDs)',
          path: '/reactnative/tools/androidstudio/avds'
        },
        {
          name: 'Running Apps',
          path: '/reactnative/tools/androidstudio/running'
        }
      ]
    },
    {
      name: 'Xcode',
      subpages: [
        {
          name: 'Installation/CLI',
          path: '/reactnative/tools/xcode/installation'
        },
        {
          name: 'Simulators',
          path: '/reactnative/tools/xcode/simulators'
        },
        {
          name: 'Running Apps',
          path: '/reactnative/tools/xcode/running'
        }
      ]
    }
  ]
};

export default RNToolsNavigation;
