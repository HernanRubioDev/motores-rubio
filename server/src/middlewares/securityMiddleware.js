const { getAuth } = require('../models/userModel');

const securityMiddleware = async(req, res, next)=>{
	const {username, auth_token} = req.params
  try {
    const auth = await getAuth(username, auth_token);
    switch (true) {
      case auth.rowCount === 0:
        res.json({status:401, title:"Error", body:"Usuario no autorizado. Será redirigido al login.", success:false})
        break;
    
      default:
        next();
        break;
    }

  } catch (error) {
    res.json({status:500, title:"Error", body:"Ups...Parece que ha ocurrido un error. Intentelo mas tarde.", success:false})
  }	
}

module.exports = {securityMiddleware}