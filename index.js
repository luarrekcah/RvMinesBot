const { app, BrowserWindow, Menu, shell } = require('electron')

const createWindow = () => {
    require('./bot');

    const win = new BrowserWindow({
      width: 400,
      height: 250,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    const template = [
        {
          label: "Menu",
          submenu: [
            {
              label: "Contato do Desenvolvedor",
              click() {
                const url =
                  "https://wa.me/+556892402096";
                shell.openExternal(url);
              },
            },
          ],
        },
      ];

    const menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })