const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
                                width: 800,
                                height: 600,
                                webPreferences: {
                                    nodeIntegration: true,
                                }
                            });

    win.loadFile('botdisplay.html');
}

app.whenReady().then(createWindow);
