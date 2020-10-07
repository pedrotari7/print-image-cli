const printImage = require('./index.js');

(async () => {
  const url = 'https://picsum.photos/640/427';
  const local = './images/test.jpg';

  console.log('Remote image:', url);
  await printImage(url);

  console.log('Local images:', local);
  await printImage(local);
})();
