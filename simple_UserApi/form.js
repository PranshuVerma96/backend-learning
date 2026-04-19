const http = require('http');

const myServer = http.createServer((req,res)=>{
  res.write(`
    <form>
    <input type="text" placeholder = " Enter your name" name='name'  />
    
      <input type="text" placeholder = " Enter your email" name='email' />

      <button type="Submit">Submit</button>
    </form>
    
    `)
  res.end('hello ')
})

myServer.listen(3000,()=>{
  console.log('server started');
  
})