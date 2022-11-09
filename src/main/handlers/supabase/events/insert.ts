import { IpcMainInvokeEvent } from 'electron';
import { Block } from './../../../../types/Block';
import { supabaseClient } from '../../../../supabase-client';

export async function insert(event: IpcMainInvokeEvent, block: Block) {
  const result = await supabaseClient.from('').insert(block);
  return result;
}
