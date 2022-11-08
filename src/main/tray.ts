import { Menu, BrowserWindow, Tray } from 'electron';

export default class TrayBuilder {
  mainWindow: BrowserWindow;
  tray: Tray | undefined;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  getInstance(): Tray | undefined {
    console.log(this.tray, '===>kfdlcld,');
    return this.tray;
  }
  buildTray(): Tray {
    this.tray = new Tray('src/main/download2.png');

    const contextMenu = Menu.buildFromTemplate([
      { label: 'Item1', type: 'radio' },
      { label: 'Item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Item4', type: 'radio' },
    ]);

    this.tray.setToolTip('Tray menu');
    this.tray.setContextMenu(contextMenu);
    return this.tray;
  }
}
