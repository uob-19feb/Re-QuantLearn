//importing moduels and api
const { app, ipcMain, dailog, Menu, BrowserWindow } = require('electron')

const path = require('path')
const url  = require('url')
const iconSrc = path.join(__dirname, '/resources/assets/icons/quantLearn.png')

let mainWin = null

//application closing 
app.on("window-all-closed", () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//window specificiation 
app.on('ready', ()=>{
  mainWin = new BrowserWindow({
    minWidth: 900,
    minHeight: 700,
    width: 900,
    height: 700,
    // width: 1024,
    // height: 815,
    title: "QuantLearn",
    // titleBarStyle: 'hiddenInset',
    icon: iconSrc,
    resizable: false,

    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWin.loadURL(url.format({
    pathname: path.join(__dirname, '/resources/base_pages/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //dev tool 
  mainWin.webContents.openDevTools()

})

if(process.platform === 'darwin'){
  app.dock.setIcon(path.join(__dirname, '/resources/assets/icons/quantLearn.png'))
}

ipcMain.on("close-me", (evt, arg) => {
  app.quit();
});

