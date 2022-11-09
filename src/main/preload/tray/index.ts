import IpcRendererService from '../../../services/ipc_renderer_service';

export async function setTitle(title: string): Promise<void> {
  return await IpcRendererService.invoke('setTitle', title);
}

export async function setToolTip(title: string): Promise<void> {
  return await IpcRendererService.invoke('setToolTip', title);
}

export async function setImage(path: string): Promise<void> {
  return await IpcRendererService.invoke('setImage', path);
}

export async function setIgnoreDoubleClickEvents(
  ignore: boolean
): Promise<void> {
  return await IpcRendererService.invoke('setIgnoreDoubleClickEvents', ignore);
}

export async function click(key: boolean): Promise<void> {
  return await IpcRendererService.invoke('click', key);
}
