import { contextBridge } from 'electron';
import * as supabase from './preload/supabase';
import * as API from './preload/API';
import * as tray from './preload/tray';
// import { tray } from './main';
// import TrayBuilder from './tray';

console.log('tray', 'supabase');
contextBridge.exposeInMainWorld('supabase', supabase);
contextBridge.exposeInMainWorld('API', API);
contextBridge.exposeInMainWorld('tray', tray);
// contextBridge.exposeInMainWorld('trayBuilder', TrayBuilder);
// contextBridge.exposeInMainWorld('tray', tray.default.prototype.getInstance());
