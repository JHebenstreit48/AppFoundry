import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Modifiers = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Styling/Properties/Modifiers'));
const Typography = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Styling/Properties/Typography'));
const ColorsAndThemes = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Styling/Properties/ColorsAndThemes'));
const ElevationAndShape = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Basics/Styling/Properties/ElevationAndShape'));

const Properties: RouteObject[] = [
  {
    path: '/jetpack-compose/basics/styling/properties/modifiers',
    element: <Modifiers />,
  },
  {
    path: '/jetpack-compose/basics/styling/properties/typography',
    element: <Typography />,
  },
  {
    path: '/jetpack-compose/basics/styling/properties/colors-and-themes',
    element: <ColorsAndThemes />,
  },
  {
    path: '/jetpack-compose/basics/styling/properties/elevation-and-shape',
    element: <ElevationAndShape />,
  },
];

export default Properties;
