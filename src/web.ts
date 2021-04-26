import { WebPlugin } from '@capacitor/core';

import type { CapacitorCrispChatPluginPlugin } from './definitions';

export class CapacitorCrispChatPluginWeb extends WebPlugin implements CapacitorCrispChatPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
