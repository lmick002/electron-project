import { contextBridge } from 'electron';
import * as supabase from './preload/supabase';
import * as API from './preload/API';
import * as tray from './preload/tray';
import * as menu from './preload/menu';

contextBridge.exposeInMainWorld('supabase', supabase);
contextBridge.exposeInMainWorld('API', API);
contextBridge.exposeInMainWorld('tray', tray);
contextBridge.exposeInMainWorld('menu', menu);
