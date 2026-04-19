
const jwt = require('jsonwebtoken');
const secret = 'pranshu@123';

function setUser(user){
  return jwt.sign(
    {

      _id :user._id,
      email :user.email,
    },
    secret
    );
  
}


function getUser(id){
  if(!token) return null;
 return jwt.verify(token, secret);
}

module.exports = {
  setUser , getUser
}