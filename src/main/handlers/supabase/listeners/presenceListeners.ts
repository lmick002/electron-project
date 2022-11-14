import { supabaseClient } from '../../../../supabase-client';

export async function onPresenceListener() {
  supabaseClient.channel('').on('presence', { event: 'sync' }, () => {});
}
