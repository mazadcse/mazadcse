---
id: bmYRMchdQ79b4wetoTzAVtest
title: "How to build a Cross-Platform Desktop application with Electron and NodeJs "
description: "How to build a Cross-Platform Desktop application with Electron and NodeJs "
updated: 1688877769801
created: 1645422712314
image: "/content/electron.png"
head:
  meta:
    - name: "keywords"
      content: "dns, http, https, networking"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Mahedi Azad (@mahediazad)"
    - property: "og:type"
      content: "article"
    - name: "twitter:card"
      content: "summary_large_image"
tags:
  - dns
  - http
  - https
  - networking
series: Electron Js
navOrder: 1
---


Install the dependencies:
```
$npm install
```

Clean previous installed:
``` 
$ npm run clean
```

Install packager (for use in npm scripts):
```
 $ npm install electron-packager --save-dev
```

Install packager (for use from CLI):
``` 
$npm install electron-packager -g
```

Install win installer:
```
 $ npm install --save-dev electron-winstaller
```

Start npm serve to run electron:
```
$ npm start 
```


To Package & Build For Windows:
```
$ npm run package-win
```

To Package & Build  For Mac:
```
$ npm run package-mac
```

To Package & Build  For Linux:
```
$ npm run package-linux
```

Packege.json:
```
{
  "name": "appname",
  "version": "1.0.0",
  "description": "Electron desktop app",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",
    "package-win": "electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Shopping List\"",
    "package-linux": "electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/icon.png --prune=true --out=release-builds"
  },
  "dependencies": {
    "electron": "^1.7.6"
  },
  "devDependencies": {
    "electron-packager": "^9.1.0",
    "electron-winstaller": "^2.6.3"
  }
}
```


For more information:
- Node CRUDE: https://github.com/mahedi2014/nodecrud
-  Simple Electron Project: https://github.com/mahedi2014/electronshoppinglist
- Google Keep Desktop Application: https://github.com/mahedi2014/keep
