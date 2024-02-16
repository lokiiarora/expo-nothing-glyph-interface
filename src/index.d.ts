// Import the native module. On web, it will be resolved to ExpoNothingGlyphModule.web.ts

import { ExpoNothingGlyphProgressInterface } from "./ExpoNothingGlyphModule.types";

// and on native platforms to ExpoNothingGlyphModule.ts
export { ExpoNothingGlyphProgressInterface } from "./ExpoNothingGlyphModule.types";

export function displayProgress(value: ExpoNothingGlyphProgressInterface): Promise<void>;
