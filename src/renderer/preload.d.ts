import * as Supabase from '../main/preload/supabase/types';
import * as Axios from '../main/preload/API/types';
declare global {
  interface Window {
    supabase: Supabase.Api;
    API: Axios.Api;
  }
}

export {};
