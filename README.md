# print-image-cli

Tool to print inline images in supported terminals.

```javascript
const printImage = require('./index.js');

const url = 'https://via.placeholder.com/350x150';
const local = './images/test.jpg';

console.log('Remove image:', url);
printImage(url);

console.log('Local images:', local);
printImage(local);
```

![](./images/screenshot.png)
