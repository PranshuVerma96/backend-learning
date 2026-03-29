const express = require('express');

const app = express();

app.get('',(req, res)=>{
  res.send('<h1>basic node example home page</h1> ')
})

app.get('/about',(req, res)=>{
  res.send('<h1> basic node example about page </h1>')
})
app.get('/service',(req, res)=>{
  res.send('<h1> basic node example services page </h1>')
})


app.listen(4300 , ()=>{console.log('server started');
});