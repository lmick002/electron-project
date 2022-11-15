import { Block } from '../../../types/Block';

export interface Api {
  select(Id: string): Promise<void>;
  insert(block: Block): Promise<void>;
  update(block: Block): Promise<void>;
  upsert(blocks: Block[]): Promise<void>;
  remove(Id: string): Promise<void>;
  onPresenceListener(args: (a: string) => void): Promise<void>;
  onBroadcastingListener(
    args: (a: string) => void,
    channel: { event: string; channelName: string }
  ): Promise<void>;
  onPostgressListener(
    args: (a: string) => void,
    channel: { event: string; channelName: string }
  ): Promise<void>;
}
