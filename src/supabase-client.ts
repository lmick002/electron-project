import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL: any = 'https://satmekjsajbhqdswafdi.supabase.co';
export const publicAnonKey: any =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhdG1la2pzYWpiaHFkc3dhZmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEyNzIyMTUsImV4cCI6MTk3Njg0ODIxNX0.5c0TuhbNMzXLaIfH1deCRRbyqkUImdwpj2yIN2DPe8s';

export const supabaseClient = createClient(SUPABASE_URL, publicAnonKey);
