import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoNothingGlyphModuleViewProps } from './ExpoNothingGlyphModule.types';

const NativeView: React.ComponentType<ExpoNothingGlyphModuleViewProps> =
  requireNativeViewManager('ExpoNothingGlyphModule');

export default function ExpoNothingGlyphModuleView(props: ExpoNothingGlyphModuleViewProps) {
  return <NativeView {...props} />;
}
