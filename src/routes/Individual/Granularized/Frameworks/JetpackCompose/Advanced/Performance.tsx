import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RecompositionAndSkips = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/Performance/RecompositionAndSkips'));
const ToolingAndProfilers = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/Performance/ToolingAndProfilers'));

const Performance: RouteObject[] = [
  {
    path: '/jetpack-compose/advanced/performance/recomposition-and-skips',
    element: <RecompositionAndSkips />,
  },
  {
    path: '/jetpack-compose/advanced/performance/tooling-and-profilers',
    element: <ToolingAndProfilers />,
  },
];

export default Performance;
