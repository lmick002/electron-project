import { IpcMainInvokeEvent } from 'electron';
import { trayBuilder } from '../../../main';

export async function setIgnoreDoubleClickEvents(
  event: IpcMainInvokeEvent,
  ignore: boolean
) {
  let tray = trayBuilder.getInstance();
  const result = tray?.setIgnoreDoubleClickEvents(ignore);
  return result;
}
