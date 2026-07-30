import type { Subpage } from '@/types/navigation';

import Flutter from '@/navigation/individual/topics/Frameworks/Flutter';
import JetpackCompose from '@/navigation/individual/topics/Frameworks/JetpackCompose';
import ReactNative from '@/navigation/individual/topics/Frameworks/ReactNative';
import SwiftUI from '@/navigation/individual/topics/Frameworks/SwiftUI';
import Xamarin from '@/navigation/individual/topics/Frameworks/Xamarin';

const frameworks: Subpage = {
  name: 'Frameworks',
  subpages: [
    Flutter,
    JetpackCompose,
    ReactNative,
    SwiftUI,
    Xamarin
    
  ]
};

export default frameworks;