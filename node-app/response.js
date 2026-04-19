const http = require('http');

const age = 29;
http.createServer((req, res)=>{
  res.setHeader("content-type" ,"text/html");
  res.write(`
    <html>
    <head>
    <title>my code</title>
<style>
body{
color:green;
}
</style>

    </head>
    <body>
    <h1>this is my first code </h1>
    <h2>${age}</h2>
    <h2>${new Date()}</h2>
    </body>
    </html>
    `)
  res.end("pranshu verma")

}).listen(2000,()=>{console.log('server started')});