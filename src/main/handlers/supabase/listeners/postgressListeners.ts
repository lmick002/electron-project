import { supabaseClient } from '../../../../supabase-client';

export async function onPostgressListener(
  event: any,
  channel: { event: string; channelName: string }
) {
  const postgressChannelUpdate = supabaseClient.channel(channel.channelName);
  postgressChannelUpdate
    .on('postgres_changes', { event: 'INSERT', schema: '*' }, (ev: any) => {
      event.sender.send('postgress', ev);
    })
    .subscribe();
}
