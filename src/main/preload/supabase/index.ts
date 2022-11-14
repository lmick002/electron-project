import { ipcRenderer } from 'electron';
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

export async function onPresenceListener(
  args: (a: string) => void
): Promise<void> {
  return new Promise((resolve) => {
    ipcRenderer.invoke('presence-listener', '');
    ipcRenderer.on('presence', (event, data) => {
      args(data);
    });
  });
}

export async function onBroadcastingListener(
  args: (a: string) => void
): Promise<void> {
  return new Promise((resolve) => {
    IpcRendererService.invoke('broadcasting-listener', '');
    ipcRenderer.on('broadcasting', (event, data) => {
      args(data);
    });
  });
}

export async function onPostgressListener(
  args: (a: string) => void
): Promise<void> {
  return new Promise((resolve) => {
    IpcRendererService.invoke('postgress-listener', '');
    ipcRenderer.on('postgress', (event, data) => {
      args(data);
    });
  });
}
