import { IpcMainInvokeEvent } from 'electron';
import { menuBuilder } from '../../../main';

export async function getMenuItemById(event: IpcMainInvokeEvent, Id: string) {
  let menu = menuBuilder.getInstance();
  const result = menu?.getMenuItemById(Id);
  return result;
}
