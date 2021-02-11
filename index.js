const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const { follow } = require('./follow-redirect.js');

const imgcat = path.resolve(__dirname, 'imgcat');

const fd = fs.openSync(imgcat, 'r');

fs.fchmodSync(fd, 0o777);

const exec = (cmd) =>
  new Promise((res, rej) => {
    cp.exec(cmd, { stdio: 'inherit' }, (error, stdout) => {
      if (error) {
        rej(error);
        return;
      }
      console.log(stdout);
      res();
    });
  });

const printImage = async (source) => {
  const isUrl = source.startsWith('http');
  const isImage = !!path.extname(source);

  if (isUrl) {
    if (!isImage) {
      source = await follow(source);
    }
    await exec(`${imgcat} -u ${source}`);
  } else {
    await exec(`${imgcat} ${source}`);
  }
};

module.exports = printImage;
