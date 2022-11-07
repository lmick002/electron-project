import { supabaseClient } from 'supabase-client';

export async function initializeBroadcastingListener() {
  supabaseClient.channel('').on('broadcast', { event: '*' }, () => {});
}
