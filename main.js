const { app, BrowserWindow, ipcMain } = require( 'electron' );
const path = require( 'path' );

const createWindow = () => {
  const win = new BrowserWindow( {
    width: 1600,
    height: 900,
    icon: __dirname + '/dist/img/Icon.icns',
    backgroundColor: '#fff',
    webPreferences: {
      preload: path.join( __dirname, 'preload.js' ),    
      devTools: true,
      nodeIntegration: false,
    },
  } );

  win.loadFile( 'index.html' );
  win.openDevTools();
}

ipcMain.handle('perform-action', (event, ...args) => {
  console.log(event);
})

app.whenReady().then( () => {
  createWindow();

  app.on( 'activate', () => {
    if( BrowserWindow.getAllWindows().length === 0 ) {
      createWindow();
    }
  } );
} );

app.on( 'window-all-closed', () => {
  const { platform } = process;
  if( platform !== 'darwin' ) {
    app.quit();
  }
} );