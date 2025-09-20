// src/Components/NavigationUI/PageLayout.tsx
import { ReactNode, useEffect, useMemo } from "react";
import { useBreadcrumbTrail } from "@/Navigation/Combined/Core/useBreadCrumbTrail";
import { SITE_NAME } from "@/Components/Shared/dynamicSiteName";
import "@/SCSS/NavigationStyles/PageLayout.scss";

type PageLayoutProps = {
  children: ReactNode;
  /** Optional full override, e.g. "AppFoundry | About" */
  shortTitle?: string;
};

const PageLayout = ({ children, shortTitle }: PageLayoutProps) => {
  const rawCrumbs = useBreadcrumbTrail();

  // Trim & filter: remove blanks and whitespace-only crumbs
  const breadcrumb = useMemo(
    () =>
      (rawCrumbs ?? [])
        .map((c) => (typeof c === "string" ? c.trim() : c))
        .filter((c) => typeof c === "string" && c.length > 0),
    [rawCrumbs]
  );

  const joined = useMemo(() => breadcrumb.join(" > ").trim(), [breadcrumb]);

  const computedTitle = useMemo(() => {
    if (shortTitle && shortTitle.trim()) return shortTitle.trim();
    if (joined) return joined;                // notes pages (unchanged behavior)
    return `${SITE_NAME} | Home`;             // homepage or truly empty crumbs
  }, [shortTitle, joined]);

  useEffect(() => {
    document.title = computedTitle;           // always set to a non-empty value
  }, [computedTitle]);

  return <div className="PageLayout">{children}</div>;
};

export default PageLayout;