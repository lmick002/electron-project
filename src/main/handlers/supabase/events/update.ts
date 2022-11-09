import { IpcMainInvokeEvent } from 'electron';
import { supabaseClient } from '../../../../supabase-client';
import { Block } from 'types/Block';

export async function update(event: IpcMainInvokeEvent, block: Block) {
  const result = await supabaseClient.from('').update(block);
  return result;
}
