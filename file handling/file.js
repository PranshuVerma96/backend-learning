

const os = require('os')
const fs = require('fs'); // fs is built module


// this is sync call
//  fs.writeFileSync('./test.txt','Hey there node');


//async
// fs.writeFile('./test.txt','Hey there node js',(err)=>{})


// sync
// const result = fs.readFileSync('./contact.txt',"utf-8")

// console.log(result);


// async
 // it doesnot return 
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//   if(err){
//    console.log("Error " , err);
   
//   }else {
//     console.log(result);
    
//   }
// })

// fs.appendFileSync('./test.txt', ` ${Date.now()}hey how are your \n`);

// copy data to one file to another file 
// fs.cpSync('./test.txt','./copy.txt')

// delete file 
// fs.unlinkSync('./copy.txt')

// find the properties of file
const data = fs.statSync('./test.txt').isFile()

console.log(data);
// make directory 

// fs.mkdirSync('my-docs',{})

// blocking
console.log("1");

const result = fs.readFileSync('./contact.txt',"utf-8")
console.log(result);

console.log("2");

// non blocking 
console.log("3");
const result2 = fs.readFile('./contact.txt',"utf-8" ,(err,result2)=>{console.log(result2);
})
console.log("4");



// default thread pool size = 4
 // max -8core cpu = 8

 console.log(os.cpus().length);
 
