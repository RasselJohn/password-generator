const {app, BrowserWindow} = require('electron');

function createWindow() {
    // create window
    let win = new BrowserWindow({
        width: 300,
        height: 450,
        center: true,
        resizable: false,
        frame: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.removeMenu();
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);