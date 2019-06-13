# node-chromium [![Build Status](https://travis-ci.org/dtolstyi/node-chromium.svg?branch=master)](https://travis-ci.org/dtolstyi/node-chromium) [![XO code style](https://img.shields.io/badge/code_style-XO-blue.svg)](https://github.com/sindresorhus/xo) [![npm version](https://badge.fury.io/js/chromium.svg)](https://badge.fury.io/js/chromium) [![Platforms](https://img.shields.io/badge/platforms-Win/Linux/Mac-lightgrey.svg)](https://github.com/dtolstyi/node-chromium)
> Chromium binaries for your NodeJS project

**node-chromium** allows you to easily add [Chromium](https://www.chromium.org/) binaries to your project and use it for automation, testing, web scraping or just for fun.

## Why Chromium?
[Chromium](https://www.chromium.org/) is an open-source web browser developed and maintained by The Chromium Project. Google Chrome, also released in 2008, is a proprietary web browser developed and maintained by Google. The reason why Chrome and Chromium are tied to each other is that Chome borrows Chromium’s source code.  
The main benefit of using Chromium is that it **doesn't** include all the proprietary modifications made by Google, thus it's more lightweight and more suitable for automation purposes.  
You can see full list of differences in [Fossbytes article](https://fossbytes.com/difference-google-chrome-vs-chromium-browser/).

## Requirements
`node-chromium 2.x.x` is tested against and supports Node.js 7+  
If you need to use older versions of Node.js try `node-chromium 1.x.x` releases.

## Usage
```
npm install --save chromium
```

During the installation process **node-chromium** will find the latest suitable build for your platform, download it and extract into libraries folder. As soon as installation is finished, you are ready to use Chromium in your project:

```js
const chromium = require('chromium');
const {execFile} = require('child_process');

if(!chromium.path)
	chromium.install();

execFile(chromium.path, ['https://google.com'], err => {
	console.log('Hello Google!');
});
```
## License
MIT
