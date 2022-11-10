import { ipcMain } from 'electron';
import {
  click,
  setIgnoreDoubleClickEvents,
  setImage,
  setTitle,
  setToolTip,
} from './events';

export function initializetTrayHandler() {
  ipcMain.handle('setTitle', setTitle);
  ipcMain.handle('setToolTip', setToolTip);
  ipcMain.handle('setImage', setImage);
  ipcMain.handle('setIgnoreDoubleClickEvents', setIgnoreDoubleClickEvents);
  ipcMain.handle('click', click);
}
