import { ipcMain } from 'electron';
import { get, post } from './events';

export function initializeApiHandler() {
  ipcMain.handle('get', async (event, param1, param2) => {
    get(param1, param2);
  });

  ipcMain.handle('post', async (event, param1, param2) => {
    post(param1, param2);
  });
}
