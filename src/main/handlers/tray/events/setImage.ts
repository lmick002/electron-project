import { IpcMainInvokeEvent } from 'electron';
import { trayBuilder } from '../../../main';

export async function setImage(event: IpcMainInvokeEvent, path: string) {
  let tray = trayBuilder.getInstance();
  const result = tray?.setImage(path);
  return result;
}
