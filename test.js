const printImage = require('./index.js');

const url = 'https://via.placeholder.com/350x150';
const local = './test.jpg';

console.log('Remove image:', url);
printImage(url);

console.log('Local images:', local);
printImage(local);
