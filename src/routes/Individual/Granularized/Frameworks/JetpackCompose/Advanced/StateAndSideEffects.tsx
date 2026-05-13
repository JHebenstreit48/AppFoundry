import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StateHoisting = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/StateAndSideEffects/StateHoisting'));
const EffectsAndCoroutines = lazy(() => import('@/Pages/MainTabs/Frameworks/JetpackCompose/Advanced/StateAndSideEffects/EffectsAndCoroutines'));

const StateAndSideEffects: RouteObject[] = [
  {
    path: '/jetpack-compose/advanced/state-and-side-effects/state-hoisting',
    element: <StateHoisting />,
  },
  {
    path: '/jetpack-compose/advanced/state-and-side-effects/effects-and-coroutines',
    element: <EffectsAndCoroutines />,
  },
];

export default StateAndSideEffects;
