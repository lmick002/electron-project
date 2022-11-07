import { IpcMainInvokeEvent } from 'electron';
import { supabaseClient } from 'supabase-client';

export async function remove(event: IpcMainInvokeEvent, Id: any) {
  const result = supabaseClient.from('').delete(Id);
  return result;
}
