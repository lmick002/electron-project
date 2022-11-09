import { IpcMainInvokeEvent } from 'electron';
import { trayBuilder } from '../../../main';

export async function setTooltip(event: IpcMainInvokeEvent, tooltip: string) {
  let tray = trayBuilder.getInstance();
  const result = tray?.setToolTip(tooltip);
  return result;
}
