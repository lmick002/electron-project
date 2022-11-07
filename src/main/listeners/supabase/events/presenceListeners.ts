import { supabaseClient } from 'supabase-client';

export async function initializePresenceListener() {
  supabaseClient.channel('').on('presence', { event: 'sync' }, () => {});
}
