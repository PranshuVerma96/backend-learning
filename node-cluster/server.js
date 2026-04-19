const express = require('express');
const cluster = require('cluster');
const os = require('os');
const { pid } = require('process');

const totalCPUs = os.cpus().length;

const app = express();
const PORT =  8000;

if(cluster.isPrimary){
  for(let i = 0; i<totalCPUs; i++ ){
    cluster.fork();
  }
}
else{

  
app.get('/' , (req, res)=>{
  return res.json({message : 'Hello from express server ' , pid});
});

app.listen(PORT , ()=>{console.log(`server Started At PORT : ${PORT}`);
})
}
