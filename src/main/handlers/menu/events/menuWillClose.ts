import { IpcMainInvokeEvent } from 'electron';
import { menuBuilder } from '../../../main';

export async function menuWillClose(event: IpcMainInvokeEvent, key: boolean) {
  let menu = menuBuilder.getInstance();
  const result = menu?.on('menu-will-close', () => {});
  return result;
}
