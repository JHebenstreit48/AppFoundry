import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Tools: Subpage = {
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
              path: '/react-native/tools/expo/cli/overview'
            },
            {
              name: 'Workflow',
              path: '/react-native/tools/expo/cli/workflow'
            },
            {
              name: 'Ejecting',
              path: '/react-native/tools/expo/cli/eject'
            },
          ],
        },
        {
          name: 'Expo Go',
          subpages: [
            {
              name: 'Installing/Running',
              path: '/react-native/tools/expo/go/install'
            },
            {
              name: 'Previewing',
              path: '/react-native/tools/expo/go/preview'
            },
            {
              name: 'QR Codes/Testing',
              path: '/react-native/tools/expo/go/qr'
            },
          ],
        },
      ],
    },
    {
      name: 'React Native CLI',
      subpages: [
        {
          name: 'Overview',
          path: '/react-native/tools/rn-cli/overview'
        },
        {
          name: 'Setup',
          path: '/react-native/tools/rn-cli/setup'
        },
        {
          name: 'Running Apps',
          path: '/react-native/tools/rn-cli/running'
        },
      ],
    },
    {
      name: 'Metro Bundler',
      subpages: [
        {
          name: 'Overview',
          path: '/react-native/tools/metro/overview'
        },
        {
          name: 'Manual Access/Commands',
          path: '/react-native/tools/metro/usage'
        },
      ],
    },
    {
      name: 'Android Studio (RN)',
      subpages: [
        {
          name: 'AVDs for RN',
          path: '/reactnative/tools/android-studio/avds-for-rn'
        },
        {
          name: 'Build/SDK Setup (RN)',
          path: '/reactnative/tools/android-studio/sdk-setup-rn'
        },
      ],
    },
    {
      name: 'Xcode (RN)',
      subpages: [
        {
          name: 'iOS Simulator for RN',
          path: '/reactnative/tools/xcode/simulator-for-rn'
        },
        {
          name: 'Signing & Run (RN)',
          path: '/reactnative/tools/xcode/signing-run-rn'
        },
      ],
    },
  ],
};

export default Tools;