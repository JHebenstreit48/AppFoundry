import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Performance',
      subpages: [
        {
          name: 'Hardware Acceleration & Snapshots',
          path: '/tools/android-studio/advanced/performance/accel-snapshots'
        },
        {
          name: 'Emulator Networking & Proxies',
          path: '/tools/android-studio/advanced/performance/networking'
        },
      ],
    },
    {
      name: 'Diagnostics',
      subpages: [
        {
          name: 'Logcat & Profiler',
          path: '/tools/android-studio/advanced/diagnostics/logcat-profiler'
        },
        {
          name: 'Troubleshooting (HAXM/Hypervisor/Ports)',
          path: '/tools/android-studio/advanced/diagnostics/troubleshooting'
        },
      ],
    },
    {
      name: 'Automation',
      subpages: [
        {
          name: 'AVD CLI & Headless Emulator',
          path: '/tools/android-studio/advanced/automation/avd-cli-headless'
        },
        {
          name: 'Build/Run Automation (Gradle & adb)',
          path: '/tools/android-studio/advanced/automation/gradle-adb'
        },
      ],
    },
  ],
};

export default Advanced;