import type { Subpage } from '@/types/navigation';

import languages from '@/Navigation/Combined/Topics/languages';
import frameworks from '@/Navigation/Combined/Topics/frameworks';
import tools from '@/Navigation/Combined/Topics/tools';
import resources from '@/Navigation/Combined/Topics/resources';

const pages: Subpage[] = [
  languages,
  frameworks,
  tools,
  resources
];

export default pages;