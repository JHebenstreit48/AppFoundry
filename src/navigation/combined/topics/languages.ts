import type { Subpage } from '@/types/navigation';

import Kotlin from '@/navigation/individual/topics/Languages/Kotlin';
import Dart from '@/navigation/individual/topics/Languages/Dart';
import Java from '@/navigation/individual/topics/Languages/Java';
import TypeScript from '@/navigation/individual/topics/Languages/TypeScript';

const languages: Subpage = {
  name: 'Languages',
  subpages: [
    Kotlin,
    Dart,
    Java,
    TypeScript,
  ],
};

export default languages;