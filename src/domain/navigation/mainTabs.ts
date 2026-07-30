import type { Subpage } from '@/types/navigation';

import languages from '@/navigation/combined/topics/languages';
import frameworks from '@/navigation/combined/topics/frameworks';
import tools from '@/navigation/combined/topics/tools';
import resources from '@/navigation/combined/topics/resources';
import glossary from '@/navigation/combined/topics/glossary';

const pages: Subpage[] = [
  languages,
  frameworks,
  tools,
  resources,
  glossary
];

export default pages;