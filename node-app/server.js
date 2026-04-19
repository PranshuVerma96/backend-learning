const http = require('http');


http.createServer((req, res)=>{
  res.write("this is pranshu")
  res.end("hello hey ")
}).listen(3000);


http.createServer((req, res)=>{
  res.write("this is pranshu")
  res.end("hello hey I am a developer")
}).listen(4000);