const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
const { time } = require('console');
const queryString = require('querystring');

const argu = process.argv;
const port = argu[2] || 6000 ;

// const myServer = http.createServer((req, res)=>{
//   res.writeHead(200, {"content-type" : 'text/html'})
// console.log(req.url);

// if(req.url === '/'){
//  res.write(`
//   <form action = "/submit" method = "post">
//   <lable>Name</lable>
//   <input type="text" placeholder = "enter name " name = "name" />

//   <lable>Email</lable>
//   <input type="text" placeholder = "enter email " name = "name" />

//   <button>Submit</button>
//   </form>
  
//   `)
// }
// else if(req.url === '/submit'){
//   res.write("<h1>Data Submited</h1>")
// }

//   res.end();
// })

const myServer = http.createServer((req,res)=>{
fs.readFile('html/from.html',"utf-8" , (err, data)=>{
if(err){
  res.writeHead(500,{"content-type" : "text/html"});
  res.end("internala server error")
}
else if(req.url === '/' && req.method === "GET" ){
  res.write(data);
}
else if(req.url === '/submit'){
  let dataBody = [];
  req.on('data', (chunk)=>{
    dataBody.push(chunk);

  } );
  req.on('end' , ()=>{
    let rowData = Buffer.concat(dataBody).toString();
    let readAbleData = queryString.parse(rowData);
      const formattedData = `Name: ${readAbleData.name}, Email: ${readAbleData.email} | ${new Date().toLocaleTimeString()}\n`;


   fs.appendFile('form.txt', formattedData, (err)=>{
    console.log('data submitted succfully');
    
   })
    
  })
  res.write(`<h1>Data Submited succfully</h1>
  `)
}
  res.end();
})


})

myServer.listen(port,()=>console.log('server started')
);


