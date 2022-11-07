import { supabaseClient } from 'supabase-client';

export async function initializePostgressListener() {
  supabaseClient
    .channel('')
    .on('postgres_changes', { event: '*', schema: '*' }, () => {});
}
