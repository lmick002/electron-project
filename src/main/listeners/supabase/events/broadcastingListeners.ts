import { supabaseClient } from 'supabase-client';

export async function initializeBroadcastingListener() {
  supabaseClient.channel('').on('broadcast', { event: '*' }, () => {});
}

// import { supabaseClient } from 'supabase-client';

// export async function initializeBroadcastingListener(cb) {
//   supabaseClient.channel('').on('broadcast', { event: '*' }, (data) => {
//     cb(data);
//   });
// }
