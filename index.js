const cp = require('child_process');
const fs = require('fs');
const path = require('path');

const imgcat = path.resolve(__dirname, 'imgcat');

const fd = fs.openSync(imgcat, 'r');

fs.fchmodSync(fd, 0o777);

const executeCMD = (cmd) => cp.execSync(cmd, { stdio: 'inherit' });

const printImage = (source) => {
  const isUrl = source.startsWith('http');

  if (isUrl) {
    executeCMD(`${imgcat} -u ${source.replace('?{imageMachine}', '') + '?height=200'}`);
  } else {
    executeCMD(`${imgcat} ${source}`);
  }
};

module.exports = printImage;
