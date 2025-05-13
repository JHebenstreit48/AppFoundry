import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RNToolsNavigation: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Expo",
      subpages: [
        {
          name: "Expo CLI",
          subpages: [
            {
              name: "Overview & Installation",
              path: "/reactnative/tools/expo/cli/overview"
            },
            {
              name: "Managed Workflow",
              path: "/reactnative/tools/expo/cli/managed"
            },
            {
              name: "Ejecting from Expo",
              path: "/reactnative/tools/expo/cli/eject"
            }
          ]
        },
        {
          name: "Expo Go",
          subpages: [
            {
              name: "Installing & Running",
              path: "/reactnative/tools/expo/go/install"
            },
            {
              name: "Previewing Projects",
              path: "/reactnative/tools/expo/go/preview"
            },
            {
              name: "QR Codes & Device Testing",
              path: "/reactnative/tools/expo/go/qr"
            }
          ]
        }
      ]
    },
    {
      name: "Metro Bundler",
      subpages: [
        {
          name: "Overview & Purpose",
          path: "/reactnative/tools/metro/overview"
        },
        {
          name: "Manual Access & Commands",
          path: "/reactnative/tools/metro/usage"
        }
      ]
    },
    {
      name: "Android Studio",
      subpages: [
        {
          name: "Installation & SDK Configuration",
          path: "/reactnative/tools/androidstudio/installation"
        },
        {
          name: "Creating Virtual Devices (AVDs)",
          path: "/reactnative/tools/androidstudio/avds"
        },
        {
          name: "Running React Native Apps",
          path: "/reactnative/tools/androidstudio/running"
        }
      ]
    },
    {
      name: "Xcode",
      subpages: [
        {
          name: "Installation & CLI Tools",
          path: "/reactnative/tools/xcode/installation"
        },
        {
          name: "Configuring Simulators",
          path: "/reactnative/tools/xcode/simulators"
        },
        {
          name: "Running React Native Apps",
          path: "/reactnative/tools/xcode/running"
        }
      ]
    }
  ]
};

export default RNToolsNavigation;
