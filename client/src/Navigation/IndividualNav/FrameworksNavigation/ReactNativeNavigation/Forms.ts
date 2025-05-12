import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RNFormsNavigation: Subpage = {
  name: "Forms",
  subpages: [
    {
      name: "Form Libraries",
      subpages: [
        { name: "Using Formik", path: "/reactnative/forms/formik" },
        { name: "Yup Validation", path: "/reactnative/forms/yup" }
      ]
    },
    {
      name: "Form UX",
      subpages: [
        { name: "Error Messages & Feedback", path: "/reactnative/forms/ux/errors" },
        { name: "Handling Inputs & Focus", path: "/reactnative/forms/ux/focus" }
      ]
    }
  ]
};

export default RNFormsNavigation;
