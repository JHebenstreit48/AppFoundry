import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'IDE Overview',
          path: '/tools/android-studio/basics/ide-overview'
        },
        {
          name: 'Installation & SDK Manager',
          path: '/tools/android-studio/basics/installation-sdk'
        },
        {
          name: 'Project Structure & Gradle Basics',
          path: '/tools/android-studio/basics/project-structure'
        }
      ]
    },
    {
      name: 'Emulators',
      subpages: [
        {
          name: 'AVD Manager',
          path: '/tools/android-studio/basics/avd-manager'
        },
        {
          name: 'Emulator Essentials',
          path: '/tools/android-studio/basics/emulator-essentials'
        }
      ]
    }
  ]
};

export default Basics;