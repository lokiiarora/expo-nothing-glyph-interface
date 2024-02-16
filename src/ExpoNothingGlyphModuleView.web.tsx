import * as React from 'react';

import { ExpoNothingGlyphModuleViewProps } from './ExpoNothingGlyphModule.types';

export default function ExpoNothingGlyphModuleView(props: ExpoNothingGlyphModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
