import { BrowserWindow } from 'electron';
export interface Api {
  getMenuItemById(Id: string): Promise<void>;
  menuWillClose(key: boolean): Promise<void>;
  closePopup(option: BrowserWindow): Promise<void>;
}
