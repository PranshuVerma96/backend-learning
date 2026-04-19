const {getUser} = require('../service/auth')

// function checkForAuthentication(req, res, next ){
//   const authorizationHeaderValue = req.headers["authorization"]

//   if(!authorizationHeaderValue)
// }


async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies.uid;
  if(!userUid){
    return res.redirect('/login')
    
  }
  const user = getUser(userUid);
    if(!user) return res.redirect('/login');
    try{
      return jwt.verify(TokenExpiredError, secret);
    }catch(error){
      return null;
    }

    res.user = user ;
    next();
  }


module.exports = {
  restrictToLoggedinUserOnly
}