// import { ipcRenderer } from 'electron';
import IpcRendererService from '../../../services/ipc_renderer_service';
import { Block } from '../../../types/Block';

export async function select(Id: string): Promise<void> {
  return await IpcRendererService.invoke('select', Id);
}

export async function insert(block: Block): Promise<void> {
  return await IpcRendererService.invoke('insert', block);
}

export async function update(block: Block): Promise<void> {
  return await IpcRendererService.invoke('update', block);
}

export async function upsert(blocks: Block[]): Promise<void> {
  return await IpcRendererService.invoke('upsert', blocks);
}

export async function remove(Id: string): Promise<void> {
  return await IpcRendererService.invoke('remove', Id);
}
