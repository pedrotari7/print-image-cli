const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const { follow } = require('./follow-redirect.js');

const imgcat = path.resolve(__dirname, 'imgcat');

const fd = fs.openSync(imgcat, 'r');

fs.fchmodSync(fd, 0o777);

const executeCMD = (cmd) => cp.execSync(cmd, { stdio: 'inherit' });

const printImage = async (source) => {
  const isUrl = source.startsWith('http');
  const isImage = !!path.extname(source);

  if (isUrl) {
    if (!isImage) {
      source = await follow(source);
      executeCMD(`${imgcat} -u ${source}`);
      return;
    }
    executeCMD(`${imgcat} -u ${source.replace('?{imageMachine}', '') + '?height=200'}`);
  } else {
    executeCMD(`${imgcat} ${source}`);
  }
};

module.exports = printImage;
