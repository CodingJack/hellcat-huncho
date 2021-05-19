const { ipcRenderer } = require('electron');
ipcRenderer.invoke('perform-action', ...args);

const fs = require('fs');
const root = fs.readdirSync('/');
console.log(root);

/*
 * @desc Timecut init
 * @since beta
*/

//const timecut = require( './node_modules/timecut' );
// import timecut = from 'timecut';
//console.log(timecut);
/*
timecut( {
  url: 'https://www.codingjack.com/revslider-page-3/',
  viewport: {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  },
  pipeMode: true,
  frameCache: true,
  pixFmt: 'yuv420p',
  fps: 30,
  duration: 20,
  output: './videos/video.mp4',
} ).then(function () {
  // eslint-disable-next-line no-console
  console.log( 'Done!' );
} );
*/