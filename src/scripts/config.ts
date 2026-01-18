export const config = {
  navEntryModule: "@/Navigation/Combined/Core/mainTabs",

  pagesRoot: "src/Pages/MainTabs",
  routesSectionsRoot: "src/routes/Sections",

  sectionNameMap: {
    Languages: "Languages",
    Frameworks: "Frameworks",
    Tools: "Tools",
    Resources: "Resources",
  } as Record<string, string>,

  genericLeafNames: new Set([
    "Introduction",
    "Overview",
    "Basics",
    "Fundamentals",
    "Getting Started",
    "Setup",
  ]),

  defaultLimit: 10_000,
};