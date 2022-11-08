import IpcRendererService from '../../../services/ipc_renderer_service';

export async function tray() {
  return await IpcRendererService.invoke('tray');
}
