import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL: any = process.env.REACT_APP_SUPABASE_URL;
export const publicAnonKey: any = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(SUPABASE_URL, publicAnonKey);
