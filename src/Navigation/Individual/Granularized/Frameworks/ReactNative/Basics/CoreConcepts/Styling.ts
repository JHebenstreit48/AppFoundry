import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Styling: Subpage = {
  name: 'Styling',
  subpages: [
    {
      name: 'Basics',
      path: '/react-native/basics/core/styling/basics'
    },
    {
      name: 'Layout',
      path: '/react-native/basics/core/styling/layout'
    },
    {
      name: 'Properties',
      subpages: [
        {
          name: 'Basics',
          path: '/react-native/basics/core/styling/properties/basics'
        },
        {
          name: 'Positioning & Alignment',
          path: '/react-native/basics/core/styling/properties/positioning'
        },
        {
          name: 'Spacing',
          path: '/react-native/basics/core/styling/properties/spacing'
        },
        {
          name: 'Typography',
          path: '/react-native/basics/core/styling/properties/typography'
        },
        {
          name: 'Borders & Shadows',
          path: '/react-native/basics/core/styling/properties/borders-and-shadows'
        },
        {
          name: 'Size & Dimensions',
          path: '/react-native/basics/core/styling/properties/size-and-dimensions'
        },
        {
          name: 'Colors',
          path: '/react-native/basics/core/styling/properties/colors'
        }
      ]
    }
  ]
};

export default Styling;