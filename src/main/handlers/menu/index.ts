import { ipcMain } from 'electron';
import { closePopup, getMenuItemById, menuWillClose } from './events';

export function initializeMenuHandlers() {
  ipcMain.handle('getMenuItemById', getMenuItemById);
  ipcMain.handle('menuWillClose', menuWillClose);
  ipcMain.handle('closePopup', closePopup);
}
