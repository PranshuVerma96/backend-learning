const fs = require('fs') //core module
fs.writeFileSync("dummy.txt" , "hello there");

const os = require('os');

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());





