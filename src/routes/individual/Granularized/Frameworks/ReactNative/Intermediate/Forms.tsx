import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// --------------- Forms > Intermediate > Start ---------------
const Formik = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Forms/Formik'));

const YupValidation = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Forms/YupValidation'));

const ErrorsAndFeedback = lazy(
  () => import('@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Forms/ErrorsAndFeedback')
);

const InputsAndFocus = lazy(() => import('@/Pages/MainTabs/Frameworks/ReactNative/Intermediate/Forms/InputsAndFocus'));
// --------------- Forms > Intermediate > End -----------------

const Forms: RouteObject[] = [
  // --------------- Forms > Intermediate > Start ---------------
  {
    path: '/react-native/intermediate/forms/formik',
    element: <Formik />,
  },
  {
    path: '/react-native/intermediate/forms/yup-validation',
    element: <YupValidation />,
  },
  {
    path: '/react-native/intermediate/forms/errors-and-feedback',
    element: <ErrorsAndFeedback />,
  },
  {
    path: '/react-native/intermediate/forms/inputs-and-focus',
    element: <InputsAndFocus />,
  },
  // --------------- Forms > Intermediate > End -----------------
];

export default Forms;