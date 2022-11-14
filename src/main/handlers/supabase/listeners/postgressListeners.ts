import { supabaseClient } from '../../../../supabase-client';

export async function onPostgressListener() {
  supabaseClient
    .channel('')
    .on('postgres_changes', { event: '*', schema: '*' }, () => {});
}
