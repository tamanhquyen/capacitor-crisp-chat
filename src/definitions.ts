export interface CapacitorCrispChatPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
