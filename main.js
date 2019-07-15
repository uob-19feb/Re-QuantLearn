const { app, BrowserWindow } = require('electron')
const path = require('path')

const menu
const ipcMain 
const dialog



//my main coding started here
app.on("window-all-closed", ()=> {
  app.quit()
})
//this is to open a window
app.on('ready', function appReady() {
  mainWindow = new BrowserWindow({
    'minWidth': 800,
    'minHeight': 600,
    width: 980,
    height: 760,
    title: 'Git-it',
    icon: iconPath
  })




const iconPath = path.join(__dirname, '/resource/')
let mainWin

function createWindow() {
  // Create the browser window.
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,


    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWin.loadFile('index.html')

  // Open the DevTools.
  mainWin.webContents.openDevTools()



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})