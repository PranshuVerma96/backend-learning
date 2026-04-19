const { log } = require('console');
const path = require('path');

const file = 'test.txt';
console.log(path.extname(file));
console.log(path.basename(file));

console.log(path.resolve('test.txt'));

// global constent
console.log(__dirname);
console.log(__filename);



