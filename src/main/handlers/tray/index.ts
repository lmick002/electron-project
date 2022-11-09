import { ipcMain } from 'electron';
import {
  click,
  setIgnoreDoubleClickEvents,
  setImage,
  setTitle,
  setTooltip,
} from './events';

export function initializetTrayHandler() {
  ipcMain.handle('setTitle', setTitle);
  ipcMain.handle('setTooltip', setTooltip);
  ipcMain.handle('setImage', setImage);
  ipcMain.handle('setIgnoreDoubleClickEvents', setIgnoreDoubleClickEvents);
  ipcMain.handle('click', click);
}
