'use strict';

const fs = require('fs');

const utils = require('./utils');

const install = require('./install');

function getBinaryPath() {
    const path = utils.getOsChromiumBinPath();

    if (fs.existsSync(path)) {
        return path;
    }

    return undefined;
}

module.exports = {
    install: install,
    path: getBinaryPath()    
};
