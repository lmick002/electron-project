import { supabaseClient } from '../../../../supabase-client';

// const DOCUMENT_ID = '270804c8-eaeb-3b9a-3240-c71a09e53716';

export async function onBroadcastingListener(event: any) {
  // const blockUpdateChannel = supabaseClient.channel(
  //   'block-updates-' + DOCUMENT_ID
  // );
  // blockUpdateChannel
  //   .on('broadcast', { event: 'blockupdate' }, (ev: any) => {
  //     event.sender.send('broadcasting', ev);
  //   })
  //   .subscribe();
}
