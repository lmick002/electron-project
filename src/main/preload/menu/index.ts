import IpcRendererService from '../../../services/ipc_renderer_service';
import { BrowserWindow } from 'electron';

export async function getMenuItemById(Id: string): Promise<void> {
  return await IpcRendererService.invoke('getMenuItemById', Id);
}
export async function menuWillClose(key: boolean): Promise<void> {
  return await IpcRendererService.invoke('menuWillClose', key);
}

export async function closePopup(option: BrowserWindow): Promise<void> {
  return await IpcRendererService.invoke('closePopup', option);
}
