import { IpcMainInvokeEvent } from 'electron';
import { supabaseClient } from 'supabase-client';
import { Block } from 'types/Block';

export async function upsert(event: IpcMainInvokeEvent, blocks: Block[]) {
  const result = supabaseClient.from('').upsert(blocks);
  return result;
}
