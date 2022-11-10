import { IpcMainInvokeEvent } from 'electron';
import { trayBuilder } from '../../../main';

export async function setToolTip(event: IpcMainInvokeEvent, title: string) {
  let tray = trayBuilder.getInstance();
  const result = tray?.setToolTip(title);
  return result;
}
