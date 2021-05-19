/*
 * the main entry point for the App
*/
// require( './src/scss/style.scss' );

const electron = require( 'electron' );
const timecut = require( 'timecut' );

process.once( 'loaded', () => {
  global.ipcRenderer = electron.ipcRenderer;
});

window.addEventListener( 'DOMContentLoaded', () => {
  const replaceText = ( selector, text ) => {
    const element = document.getElementById( selector )
    if( element ) {
      element.innerText = text;
    }
  };

  for(const type of [ 'chrome', 'node', 'electron' ] ) {
    replaceText(`${type}-version`, process.versions[ type ] );
  }
  /*
  * @desc Timecut init
  * @since beta
  */
  const input = document.getElementById( 'input' );
  const go = document.getElementById( 'go' );

  input.addEventListener( 'keyup', e => {
    const val = e.target.value;
    if( val && val.search( 'http' ) !== -1 && val.search( '://' ) !== -1 && val.length > 10 ) {
      go.disabled = false;
    } else {
      go.disabled = true;
    }
  } );

  go.addEventListener( 'click', () => {
    const app = document.getElementById( 'app' );
    app.classList.add( 'loading' );
    timecut( {
      url: input.value,
      viewport: {
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      },
      pipeMode: true,
      frameCache: true,
      pixFmt: 'yuv420p',
      fps: 60,
      duration: 12,
      output: './videos/video.mp4',
    } ).then(function () {
      const output = document.getElementById( 'output' );
      output.innerHTML = 'Success!  The video is located in the videos folder';
      app.classList.remove( 'loading' );
    } );
  } );
} );