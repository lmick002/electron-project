import { ipcMain } from 'electron';
import { select, insert, update, upsert, remove } from './events';

export function initializeSupabaseHandlers() {
  ipcMain.handle('select', select);

  ipcMain.handle('insert', insert);

  ipcMain.handle('update', update);

  ipcMain.handle('upsert', upsert);

  ipcMain.handle('remove', remove);
}
