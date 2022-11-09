import { IpcMainInvokeEvent } from 'electron';
import { trayBuilder } from '../../../main';

export async function setTitle(event: IpcMainInvokeEvent, param: string) {
  const tray = trayBuilder.getInstance();
  const result = tray?.setTitle(param);
  return '';
}
