import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildVariantsAndFlavors = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/BuildAndConfig/BuildVariantsAndFlavors'));
const PermissionsAndManifests = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/BuildAndConfig/PermissionsAndManifests'));

const BuildAndConfig: RouteObject[] = [
  {
    path: '/jetpack-compose/advanced/build-and-config/build-variants-and-flavors',
    element: <BuildVariantsAndFlavors />,
  },
  {
    path: '/jetpack-compose/advanced/build-and-config/permissions-and-manifests',
    element: <PermissionsAndManifests />,
  },
];

export default BuildAndConfig;
