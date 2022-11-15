import { supabaseClient } from '../../../../supabase-client';

export async function onBroadcastingListener(
  event: any,
  channel: { event: string; channelName: string }
) {
  const blockUpdateChannel = supabaseClient.channel(channel.channelName);
  blockUpdateChannel
    .on('broadcast', { event: channel.event }, (ev: any) => {
      event.sender.send('broadcasting', ev);
    })
    .subscribe();
}
