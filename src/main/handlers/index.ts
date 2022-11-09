import { initializeApiHandler } from './API';
import { initializeMenuHandlers } from './menu';
import { initializeSupabaseHandlers } from './supabase';
import { initializetTrayHandler } from './tray';

export default function initializedHandlers(): void {
  initializeSupabaseHandlers();
  initializeApiHandler();
  initializetTrayHandler();
  initializeMenuHandlers();
}
