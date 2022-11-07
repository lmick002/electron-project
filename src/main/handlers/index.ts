import { initializeApiHandler } from './API';
import { initializeSupabaseHandlers } from './supabase';

export default function initializedHandlers(): void {
  initializeSupabaseHandlers();
  initializeApiHandler();
}
