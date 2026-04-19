// const http = require('http');
// const fs = require('fs');

// const myServer = http.createServer((req , res) => 
//   {
//    const log= `${Date.now()} : ${req.url} new request receied \n`
//     fs.appendFile('log.txt', log ,(err, data)=>{

//       switch(req.url){
//         case '/': res.end("home page");
//         break

//         case '/about' : res.end("I am pranshu")
//         break

//         default:
//           req.end("404 not found")
//       }
//   res.end(`hello from server again `)
//     })
    
//   // console.log('new request recived');

// });

// myServer.listen(8000, () => console.log('server startd'));


// const http = require('http')
// const fs = require('fs');
// const url = require('url')
const express = require("express")

const app = express();
app.get('/',(req, res) =>{
  return res.send('hello from home page');
})

app.get('/about',(req,res)=>{
  return res.send(`hello ${req.query.name}`)
  // return res.send('hellow from about page ' + 'hey' + req.query.name  + 'you are' + req.query.age)
})
app.get('/contact',(req,res)=>{
  return res.send('hellow from contact page')
})

app.listen(3000,()=>console.log('server started'));



// function myHandler(req, res){
//    if(req.url === '/favicon.ico') return res.end();
 
//   const log = `${Date.now()} ${req.method}: ${req.url} request found \n`
//   const myUrl = url.parse(req.url,true);
//   console.log(myUrl);
  

//   fs.appendFile('data.txt' , log , (err)=>{

//     switch (myUrl.pathname) {
//     case '/':
//       if(req.method === 'GET')
//       res.end('hello I am home page')
//       break;
//     case '/about':
//       const username = myUrl.query.myname;
//       res.end(`hi  ${username}`)
//       break;
//     case '/contact':
//       res.end('hello I am contact page')
//       break;

//       case '/search':
//         const search = myUrl.query.search_query;
//         res.end(` here are your reult ${search}`)

//      case '/signup':
//        if(req.method === 'GET')res.end("this is a signup form")
//         else if(req.method === 'POST'){
//       // DB query
//       res.end('Success')
//       }
//     default:
//       res.end('404 Error found')
//       break;
//   }
//   })
  
// }


// const myServer = http.createServer(app)

// myServer.listen(3000 , ()=>console.log('server stared on port 3000'));
 