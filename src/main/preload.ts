import { contextBridge } from 'electron';
import * as supabase from './preload/supabase';
import * as API from './preload/API';

contextBridge.exposeInMainWorld('supabase', supabase);
contextBridge.exposeInMainWorld('API', API);
