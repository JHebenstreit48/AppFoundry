import type { Subpage } from '@/types/navigation';

import languages from '@/navigation/combined/topics/languages';
import frameworks from '@/navigation/combined/topics/frameworks';
import tools from '@/navigation/combined/topics/tools';
import buildAndDeploy from '@/navigation/combined/topics/buildAndDeploy';
import glossaryAndResources from '@/navigation/combined/topics/glossary';

const pages: Subpage[] = [
  languages,
  frameworks,
  tools,
  buildAndDeploy,
  glossaryAndResources
];

export default pages;