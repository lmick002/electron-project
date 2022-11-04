import IpcRendererService from '../../../services/ipc_renderer_service';

export async function get(param1: string, param2: string) {
  return IpcRendererService.invoke('params', { param1, param2 });
}

export async function post(param1: string, param2: string) {
  return IpcRendererService.invoke('params', { param1, param2 });
}
