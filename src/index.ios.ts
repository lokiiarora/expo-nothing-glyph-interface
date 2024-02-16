// Import the native module. On web, it will be resolved to ExpoNothingGlyphModule.web.ts
// and on native platforms to ExpoNothingGlyphModule.ts
import { ExpoNothingGlyphProgressInterface } from "./ExpoNothingGlyphModule.types";

async function displayProgress(
  _value: ExpoNothingGlyphProgressInterface,
): Promise<void> {
  console.warn("Nothing Glyph Module not supported in iOS");
}

export { displayProgress, ExpoNothingGlyphProgressInterface };
