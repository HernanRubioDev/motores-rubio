const { isEmpty } = require('../utils/isEmpty');
const {nameValidation, surnameValidation, usernameValidation, passwordValidation, repeatPasswordValidation} = require('../validators/registerValidation');

const regiserMiddleware = async (req, res, next)=>{
	const {name, surname, username, password, re_password} = req.body;
	
  const validations = {
		...nameValidation(name), 
		...surnameValidation(surname), 
		... await usernameValidation(username),
		...passwordValidation(password), 
		...repeatPasswordValidation(re_password, password)
	}

	isEmpty(validations) 
	? 
	res.json({status:400, title:"Error", validations:validations, success: false}) 
	: 
	next();
}

module.exports={regiserMiddleware}