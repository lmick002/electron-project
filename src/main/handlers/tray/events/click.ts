import { IpcMainInvokeEvent } from 'electron';
import { trayBuilder } from '../../../main';

export async function click(event: IpcMainInvokeEvent, key: boolean) {
  let tray = trayBuilder.getInstance();
  const result = tray?.on('click', () => {});
  return result;
}
