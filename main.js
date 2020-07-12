const {app, BrowserWindow} = require('electron');

app.whenReady().then(() => {
    // create window
    let browserWindow = new BrowserWindow({
        width: 300,
        height: 455,
        center: true,
        resizable: false,
        frame: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    browserWindow.removeMenu();
    browserWindow.loadFile('src/index.html');
});