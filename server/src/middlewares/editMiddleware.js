const { isEmpty } = require('../utils/isEmpty');
const { motorValidation } = require('../validators/editValidator');

const editMiddleware = (req, res, next)=>{
  const motor = req.body
  const validations = {...motorValidation(motor)}

	isEmpty(validations) 
	? 
	res.json({status:400, title:"Error", body:validations.message, success: false}) 
	: 
	next();
}

module.exports={editMiddleware}