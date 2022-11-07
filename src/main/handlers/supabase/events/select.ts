import { IpcMainInvokeEvent } from 'electron';
import { supabaseClient } from 'supabase-client';

export async function select(event: IpcMainInvokeEvent, Id: string) {
  const result = supabaseClient.from('').select(Id);
  return result;
}
