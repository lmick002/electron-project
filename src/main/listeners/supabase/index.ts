import {
  initializePresenceListener,
  initializeBroadcastingListener,
  initializePostgressListener,
} from './events';

export function initializeSupabaseListeners() {
  initializeBroadcastingListener();
  initializePresenceListener();
  initializePostgressListener();
}
