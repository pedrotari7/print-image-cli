const cp = require('child_process');
const fs = require('fs');

const imgcat = `${__dirname}/imgcat`;

const fd = fs.openSync(imgcat, 'r');

fs.fchmodSync(fd, 0o777);

const executeCMD = (cmd) => cp.execSync(cmd, { stdio: 'inherit' });

const printImage = (url) => executeCMD(`${imgcat} -u ${url.replace('?{imageMachine}', '') + '?height=200'}`);

module.exports = printImage;
