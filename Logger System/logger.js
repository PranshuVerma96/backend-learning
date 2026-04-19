const fs = require('fs')

function logMessage(message){
  const time  = new Date().toLocaleString();
  
  fs.appendFileSync('./log.txt',`[${time}] ${message}\n`)
}


module.exports = logMessage