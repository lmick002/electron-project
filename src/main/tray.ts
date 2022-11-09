import { BrowserWindow, Tray } from 'electron';

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
    return this.tray;
  }
}
