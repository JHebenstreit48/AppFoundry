import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Styling: Subpage = {
  name: 'Styling',
  subpages: [
    {
      name: 'Basics',
      path: '/reactnative/basics/core/styling/basics'
    },
    {
      name: 'Layout',
      path: '/reactnative/basics/core/styling/layout'
    },
    {
      name: 'Properties',
      subpages: [
        {
          name: 'Basics',
          path: '/reactnative/basics/core/styling/properties/basics'
        },
        {
          name: 'Positioning & Alignment',
          path: '/reactnative/basics/core/styling/properties/positioning'
        },
        {
          name: 'Spacing',
          path: '/reactnative/basics/core/styling/properties/spacing'
        },
        {
          name: 'Typography',
          path: '/reactnative/basics/core/styling/properties/typography'
        },
        {
          name: 'Borders & Shadows',
          path: '/reactnative/basics/core/styling/properties/bordersshadows'
        },
        {
          name: 'Size & Dimensions',
          path: '/reactnative/basics/core/styling/properties/sizedimensions'
        },
        {
          name: 'Colors',
          path: '/reactnative/basics/core/styling/properties/colors'
        }
      ]
    }
  ]
};

export default Styling;