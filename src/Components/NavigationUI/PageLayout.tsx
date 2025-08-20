// Components/NavigationUI/PageLayout.tsx
import { ReactNode, useEffect, useMemo } from 'react';
import { useBreadcrumbTrail } from '@/Navigation/CombinedNav/CombinedNavAndTypes/useBreadCrumbTrail';
import '@/SCSS/NavigationStyles/PageLayout.scss';

type PageLayoutProps = {
  children: ReactNode;
  /** Optional full override, e.g. "AppFoundry | Home" */
  shortTitle?: string;
};

const PageLayout = ({ children, shortTitle }: PageLayoutProps) => {
  const rawCrumbs = useBreadcrumbTrail();
  // Filter out falsy/empty crumbs so join("") never happens
  const breadcrumb = useMemo(
    () => rawCrumbs.filter(Boolean),
    [rawCrumbs]
  );

  const computedTitle = useMemo(() => {
    if (shortTitle?.trim()) return shortTitle.trim();
    if (breadcrumb.length > 0) return breadcrumb.join(' > ');
    // No breadcrumb and no shortTitle → leave title alone (use index.html)
    return '';
  }, [breadcrumb, shortTitle]);

  useEffect(() => {
    if (computedTitle) {
      document.title = computedTitle;
    }
  }, [computedTitle]);

  return <div className="PageLayout">{children}</div>;
};

export default PageLayout;