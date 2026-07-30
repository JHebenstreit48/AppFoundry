import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavigationBasics = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Navigation/NavigationBasics'));
const TabsAndBackStack = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Navigation/TabsAndBackStack'));

const Navigation: RouteObject[] = [
  {
    path: '/jetpack-compose/basics/navigation/navigation-basics',
    element: <NavigationBasics />,
  },
  {
    path: '/jetpack-compose/basics/navigation/tabs-and-back-stack',
    element: <TabsAndBackStack />,
  },
];

export default Navigation;
