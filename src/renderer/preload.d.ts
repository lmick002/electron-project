import * as Supabase from '../main/preload/supabase/types';
import * as Axios from '../main/preload/API/types';
import * as Tray from '../main/preload/tray/types';
import * as Menu from '../main/preload/menu/types';
declare global {
  interface Window {
    supabase: Supabase.Api;
    API: Axios.Api;
    tray: Tray.Api;
    menu: Menu.Api;
  }
}

export {};
