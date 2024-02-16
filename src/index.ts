import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoNothingGlyphModule.web.ts
// and on native platforms to ExpoNothingGlyphModule.ts
import ExpoNothingGlyphModule from './ExpoNothingGlyphModule';
import ExpoNothingGlyphModuleView from './ExpoNothingGlyphModuleView';
import { ChangeEventPayload, ExpoNothingGlyphModuleViewProps } from './ExpoNothingGlyphModule.types';

// Get the native constant value.
export const PI = ExpoNothingGlyphModule.PI;

export function hello(): string {
  return ExpoNothingGlyphModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoNothingGlyphModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoNothingGlyphModule ?? NativeModulesProxy.ExpoNothingGlyphModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoNothingGlyphModuleView, ExpoNothingGlyphModuleViewProps, ChangeEventPayload };
