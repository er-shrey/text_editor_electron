const {app, BrowserWindow} = require('electron')

function createWindow () {
  let mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile('editor/editor.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
});