import { IpcMainInvokeEvent, BrowserWindow } from 'electron';
import { menuBuilder } from '../../../main';

export async function closePopup(
  event: IpcMainInvokeEvent,
  option: BrowserWindow
) {
  let menu = menuBuilder.getInstance();
  const result = menu?.closePopup(option);
  return result;
}
