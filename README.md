# Hellcat Huncho

Load and record any website for any given amount of time.  This allows a person to easily convert a web slider or web animation into an H.264 video.  Useful for kiosks and what not who would normally be connected to the internet, displaying some type of rotating banner, etc.  Most displays like that require an internet connection.  But Hellcat Huncho H.264 videos can run from your computer offline ;)

![First Screenshot of the App](/dist/img/screen1.jpg)

![Second Screenshot of the App](/dist/img/screen2.jpg)

**Step 1**

* Get ffmpeg
[https://trac.ffmpeg.org/wiki/CompilationGuide/macOS](https://trac.ffmpeg.org/wiki/CompilationGuide/macOS)

**Step 2**

* clone this repo or download the zip

**Step 3**

* npm install

**Step 4**

* npm run start

**Step 5**

* enter an accurate URL
* watch the console for progress

**Step 6**

* generates a 12 second video at 60fps, H.264 and 1920x1080 (baked settings for now).
* video will be named "video.mp4" and be placed in a directory called "videos" located in the root directory.

**Step 7**

* Compile to Electron App 
* brew install homebrew/cask-versions/wine-devel
* [https://github.com/electron/electron-packager](https://github.com/electron/electron-packager)
* electron-packager ./ --all

* [https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-the-application](https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-the-application)
