import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Kotlin from '@/Navigation/Individual/Topics/Languages/Kotlin';
import Dart from '@/Navigation/Individual/Topics/Languages/Dart';
import Java from '@/Navigation/Individual/Topics/Languages/Java';
import TypeScript from '@/Navigation/Individual/Topics/Languages/TypeScript';

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