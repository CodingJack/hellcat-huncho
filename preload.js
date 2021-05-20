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
    } ).then( () => {
      const output = document.getElementById( 'output' );
      const back = document.createElement( 'div' );
      const vid = document.createElement( 'video' );
      const close = document.createElement( 'a' );
      const frag = document.createDocumentFragment();

      output.innerHTML = 'Success!  The video is located in the videos folder';
      app.classList.remove( 'loading' );
      back.className = 'back';
      
      vid.width = 720;
      vid.height = 405;
      vid.src = './videos/video.mp4';
      vid.playsinline = 'playsinline';
      vid.poster = './dist/img/bg.jpg';
      vid.allowfullscreen = 'allowfullscreen';
      vid.controls = 'controls';
      
      const onClick = e => {
        e.stopImmediatePropagation();
        e.preventDefault();
        close.removeEventListener( 'click', onClick );
        app.removeChild( vid );
        app.removeChild( back );
        app.removeChild( close );
      };

      close.href = '#';
      close.className = 'close';
      close.innerHTML = 'close';
      close.addEventListener( 'click', onClick );

      frag.appendChild( back );
      frag.appendChild( vid );
      frag.appendChild( close );
      app.appendChild( frag );
    } );
  } );
} );