const { log } = require('console');
const fs = require('fs');

console.log(process.argv[2]);

const operation = process.argv[2];

if(operation === 'write'){
 const name = process.argv[3];
 const content = process.argv[4];
console.log( operation,name , content);


//  fs.writeFileSync();
}



// fs.writeFileSync('./files/example.txt', "hello My name is Pranshu verma ");



// to delete

// fs.unlinkSync("./files/example.txt");

// // read data 
// const data = fs.readFileSync('./files/text.txt' , "utf-8" );

// console.log(data);

// // update data 

// fs.appendFileSync('./files/text.txt',"I am a bca student");

