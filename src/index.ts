import { registerPlugin } from '@capacitor/core';

import type { CapacitorCrispChatPluginPlugin } from './definitions';

const CapacitorCrispChatPlugin = registerPlugin<CapacitorCrispChatPluginPlugin>('CapacitorCrispChatPlugin', {
  web: () => import('./web').then(m => new m.CapacitorCrispChatPluginWeb()),
});

export * from './definitions';
export { CapacitorCrispChatPlugin };
