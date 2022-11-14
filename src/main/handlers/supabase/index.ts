import { ipcMain } from 'electron';
import { select, insert, update, upsert, remove } from './events';
import {
  onPresenceListener,
  onBroadcastingListener,
  onPostgressListener,
} from '../../handlers/supabase/listeners';

export function initializeSupabaseHandlers() {
  ipcMain.handle('select', select);

  ipcMain.handle('insert', insert);

  ipcMain.handle('update', update);

  ipcMain.handle('upsert', upsert);

  ipcMain.handle('remove', remove);

  ipcMain.handle('presence-listener', onPresenceListener);

  ipcMain.handle('broadcasting-listener', onBroadcastingListener);

  ipcMain.handle('postgress-listener', onPostgressListener);
}
