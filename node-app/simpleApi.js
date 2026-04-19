const http = require('http');


const userData = [ {
  name : 'anil' ,
  age : 30,
  email : 'ainal@gmailcom'
},

{
name : "pranhsu",
age :20,
email :'pranshu34@gmail.com',

},
{
  name : 'sandesh',
  age :14,
  email : 'sandeshverma90@gmialcom'
}

]
const myServer = http.createServer((req, res)=>{
  res.setHeader('Content-type' ,'application/json')
  res.write(JSON.stringify(userData))
  res.end();

})

myServer.listen(4000,()=>console.log('server started'));
