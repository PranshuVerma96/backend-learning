const http = require('http');
const userForm = require('./userFrom');
const userDataSubmit = require('./userDataSumit');

const myServer = http.createServer((req, res)=>{
  res.writeHead(200,{'content-type' : 'text/html'})

  if(req.url === '/'){
 userForm(req, res);
  }else if(req.url === '/submit'){
   userDataSubmit(req, res);
  }

 res.end();
})

myServer.listen(4000,()=>{
  console.log('server stated ');
  
})