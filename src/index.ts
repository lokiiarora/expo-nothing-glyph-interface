// Import the native module. On web, it will be resolved to ExpoNothingGlyphModule.web.ts
// and on native platforms to ExpoNothingGlyphModule.ts
import ExpoNothingGlyphModule from "./ExpoNothingGlyphModule";
import { ExpoNothingGlyphProgressInterface } from "./ExpoNothingGlyphModule.types";

async function displayProgress(value: ExpoNothingGlyphProgressInterface): Promise<void> {
  ExpoNothingGlyphModule.displayProgress(value);
}

export { displayProgress, ExpoNothingGlyphProgressInterface };
