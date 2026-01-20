export const config = {
  // Where to import the navigation root from (Subpage[])
  navEntryModule: '@/Navigation/Combined/Core/mainTabs',

  // Output roots
  pagesRoot: 'src/Pages/MainTabs',
  routesSectionsRoot: 'src/routes/Sections',

  sectionNameMap: {
    Languages: 'Languages',
    Frameworks: 'Frameworks',
    Tools: 'Tools',
    Resources: 'Resources',
  } as Record<string, string>,

  // Optional: override topic folder names (2nd crumb)
  topicNameMap: {} as Record<string, string>,

  // Optional: deeper prefix folders between topic and group folders
  topicFsPrefixMap: {} as Record<string, string[]>,

  // Optional: normalize group folder names (crumbs after topic)
  groupFolderNameMap: {} as Record<string, string>,

  genericLeafNames: new Set([
    'Introduction',
    'Overview',
    'Basics',
    'Fundamentals',
    'Getting Started',
    'Setup',
  ]),

  defaultLimit: 10_000,
};