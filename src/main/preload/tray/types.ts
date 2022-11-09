export interface Api {
  setTitle(title: string): Promise<void>;
  setToolTip(title: string): Promise<void>;
  setImage(path: string): Promise<void>;
  setIgnoreDoubleClickEvents(ignore: boolean): Promise<void>;
  click(key: boolean): Promise<void>;
}
