const { isEmpty } = require("../utils/isEmpty");
const {usernameValidation, passwordValidation} = require("../validators/loginValidator");

const loginMiddleware = async(req, res, next)=>{

  const {username, password} = req.body;

  const validations = {...usernameValidation(username), ...passwordValidation(password)}

  isEmpty(validations) 
  ? 
  res.json({status:400, title:"Error", validations:validations, success: false}) 
  : 
  next();
}

module.exports = {loginMiddleware};